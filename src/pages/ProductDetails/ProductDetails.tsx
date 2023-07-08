import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ListProductType } from '../../types';
import handleAddToCart from '../../services/AddToCart';
import AvaliationForm from '../../components/EvaluationForm/EvaluationForm';

type EvaluationType = {
  email: string,
  text: string,
  rating: number
};

export default function ProductDetails() {
  const [details, setDetails] = useState<ListProductType>();
  const [availableQuantity, setAvailableQuantity] = useState<number>(0);
  const [evaluations, setEvaluations] = useState<EvaluationType[]>([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const fetchData = async () => {
    if (id) {
      const response = await getProductById(id);
      setDetails(response);
      setAvailableQuantity(response.available_quantity);
    }
  };

  const getData = () => {
    if (id) {
      const data = JSON.parse(localStorage.getItem(id) || '[]');
      setEvaluations(data);
    }
  };

  const handleClick = () => {
    console.log(details);
  };

  useEffect(() => {
    fetchData();
    getData();
  }, []);
  return (

    <>
      <div>
        <button onClick={ () => navigate('/') }>Voltar</button>
        <button
          data-testid="shopping-cart-button"
          onClick={ () => navigate('/shopping-cart') }
        >
          Seu Carrinho
        </button>
      </div>
      { details && (
        <>
          <div>
            <h2 data-testid="product-detail-name">{ details.title }</h2>
            <h4 data-testid="product-detail-price">{ details.price }</h4>
          </div>
          <div>
            <img
              data-testid="product-detail-image"
              src={ details.thumbnail }
              alt={ details.title }
            />
          </div>
          <div>
            <aside>
              <p><strong>Detalhes do Produto...</strong></p>
            </aside>
          </div>
          <div>
            <div>
              <small>
                Quantidade disponível:
                {' '}
                { availableQuantity }
              </small>
              <h4>Quantidade</h4>
              <button>-</button>
              {
                details.quantity ? <p>{ details.quantity }</p> : <p>1</p>
              }
              <button
                onClick={ handleClick }
              >
                +

              </button>
            </div>
            <div>
              <button
                onClick={ () => handleAddToCart(details) }
                data-testid="product-detail-add-to-cart"
              >
                add to cart + plus
              </button>
            </div>
            <AvaliationForm />
          </div>
          <div>
            {
              evaluations.map((evaluation, index) => (
                <div key={ index }>
                  <div>
                    <p data-testid="review-card-email">
                      { evaluation.email }
                    </p>
                    <p data-testid="review-card-rating">
                      { evaluation.rating }
                    </p>
                  </div>
                  <div>
                    <p data-testid="review-card-evaluation">
                      { evaluation.text }
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </>
      )}
    </>

  );
}
