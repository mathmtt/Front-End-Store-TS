import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../services/api';
import { ListProductType } from '../../types';
import handleAddToCart from '../../services/AddToCart';

export default function ProductDetails() {
  const [details, setDetails] = useState<ListProductType>();

  const { id } = useParams();

  const navigate = useNavigate();

  const fetchData = async () => {
    if (id) {
      const response = await getProductById(id);
      setDetails(response);
    }
  };
  useEffect(() => {
    fetchData();
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
          <button
            onClick={ () => handleAddToCart(details) }
            data-testid="product-detail-add-to-cart"
          >
            add to cart + plus
          </button>
        </>
      )}
    </>

  );
}
