import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItemType } from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../../components/CheckoutForm';
import Payment from '../../components/Payment';
// import { FormType } from '../../types';
// import { useNavigate } from 'react-router-dom';

const INITIAL_STATE = {
  fullName: '',
  cpf: '',
  email: '',
  phone: '',
  cep: '',
  address: '',
  // state?: '',
};

function Checkout() {
  const [cart, setCart] = useState<CartItemType[]>([]);
  // const [total, setTotal] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const getData = () => {
    const data = JSON.parse(localStorage.getItem('cart') || '[]');
    if (data) {
      setCart(data);
    }
  };

  // const getTotal = () => {
  //   const totalValue = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  //   setTotal(totalValue);
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(name, value);
    setCheckoutInfo({ ...checkoutInfo, [name]: value });
  };

  const clearCart = () => {
    localStorage.setItem('cart', JSON.stringify([]));
    setCart([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.values(checkoutInfo).some((value) => value === '')) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      clearCart();
      navigate('/');
    }
  };

  useEffect(() => {
    getData();
    // getTotal();
  }, []);

  return (
    <div>
      <div>
        <h3>Revise seus produtos</h3>
        { cart.map((item) => (
          <div key={ item.id }>
            <img src={ item.thumbnail } alt={ item.title } />
            <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
            <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
            <p>{`R$ ${(item.price * item.quantity).toFixed(2)}`}</p>
          </div>
        ))}
        <p>
          <strong>
            Total:
          </strong>
          R$
          { cart.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2) }
          {/* {` R$ ${total.toFixed(2)}`} */}
        </p>
      </div>
      <form onSubmit={ handleSubmit }>
        <div>
          Informações do Comprador
          <CheckoutForm
            onChange={ handleChange }
          />
        </div>
        <div>
          Método de Pagamento
          <Payment
            onChange={ handleChange }
          />
        </div>
        <button
          data-testid="checkout-btn"
        >
          Comprar
        </button>
      </form>
      {
        errorMsg && <p data-testid="error-msg">Campos inválidos</p>
      }
    </div>
  );
}

export default Checkout;
