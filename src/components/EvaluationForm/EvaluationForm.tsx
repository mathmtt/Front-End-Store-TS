import { useEffect, useState } from 'react';
import './EvaluationForm.css';
import { useParams } from 'react-router-dom';
import ProductReviews from '../ProductReviews/ProductReviews';

const INITIAL_STATE = {
  email: '',
  text: '',
  rating: 0,
};

type EvaluationTypeProps = {
  onClick: () => void,
};

type EvaluationType = {
  email: string,
  text: string,
  rating: number
};

function EvaluationForm({ onClick }: EvaluationTypeProps) {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [reviews, setReviews] = useState<EvaluationType[]>([]);

  const { id } = useParams();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const getData = () => {
    if (id) {
      const data = JSON.parse(localStorage.getItem(id) || '[]');
      setReviews(data);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.email === '' || formData.rating === 0) {
      setErrorMsg(true);
    }
    if (id && formData.email && formData.rating) {
      const data = JSON.parse(localStorage.getItem(id) || '[]');
      const newData = [...data, formData];
      localStorage.setItem(id, JSON.stringify(newData));
      setReviews(newData);
      setFormData(INITIAL_STATE);
      setRating(0);
      setHover(0);
      setErrorMsg(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Avaliações</h1>
      <fieldset>
        <form
          onSubmit={ handleSubmit }
        >
          <div>
            <input
              type="text"
              name="email"
              id="email-input"
              value={ formData.email }
              data-testid="product-detail-email"
              placeholder="email"
              onChange={ handleChange }
            />
            {
              [...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={ index }
                    id="rating-button"
                    className={ index <= (hover || rating) ? 'on' : 'off' }
                    data-testid={ `${index}-rating` }
                    onClick={ () => {
                      setRating(index);
                      setFormData({ ...formData, rating: index });
                    } }
                    onMouseEnter={ () => setHover(index) }
                    onMouseLeave={ () => setHover(rating) }
                    aria-label="rating"
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })
            }
          </div>
          <div>
            <textarea
              name="text"
              value={ formData.text }
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
              onChange={ handleChange }
            />
            <button
              data-testid="submit-review-btn"
              onClick={ onClick }
            >
              Avaliar
            </button>
          </div>
        </form>
        {
        errorMsg && <p data-testid="error-msg">Campos inválidos</p>
      }
      </fieldset>
      <div>
        {
          reviews.map((review, index) => (
            <ProductReviews
              key={ index }
              email={ review.email }
              rating={ review.rating }
              text={ review.text }
            />
          ))
}
      </div>

    </div>
  );
}

export default EvaluationForm;
