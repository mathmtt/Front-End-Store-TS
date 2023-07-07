import { useEffect, useState } from 'react';

type CartItemType = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

function ShoppingCart() {
  const [cart, setCart] = useState<CartItemType[]>([]);

  useEffect(() => {
    const getData = () => {
      const data = JSON.parse(localStorage.getItem('cart') || '[]');
      if (data) {
        setCart(data);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {
      cart.length !== 0
        ? (
          cart.map((item: CartItemType) => (
            <div key={ item.id }>
              <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
              <p data-testid="shopping-cart-product-quantity">{item.quantity}</p>
              <p>{item.price}</p>
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
