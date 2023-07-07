import { useEffect, useState } from 'react';

type CartItemType = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
};

function ShoppingCart() {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const getData = () => {
    const data = JSON.parse(localStorage.getItem('cart') || '[]');
    if (data) {
      setCart(data);
    }
  };

  const increaseQuantity = (id: string) => {
    if (cart) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  const decreaseQuantity = (id: string) => {
    if (cart) {
      const newCart = cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {
      cart.length !== 0
        ? (
          cart.map((item: CartItemType) => (
            <div key={ item.id }>
              <button data-testid="remove-product">X</button>
              <img src={ item.thumbnail } alt={ item.title } />
              <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
              <button
                data-testid="product-increase-quantity"
                onClick={ () => increaseQuantity(item.id) }
              >
                +

              </button>
              <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
              <button
                data-testid="product-decrease-quantity"
                onClick={ () => decreaseQuantity(item.id) }
              >
                -

              </button>
              <p>{`R$ ${(item.price * item.quantity).toFixed(2)}`}</p>
            </div>
          )))
        : (
          <h2
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h2>
        )
  }
    </div>
  );
}

export default ShoppingCart;
