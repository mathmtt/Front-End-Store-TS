import { ListProductType } from '../types';

function handleAddToCart(product: ListProductType) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const productInCart = cart.find((item: ListProductType) => item.id === product.id);
  if (productInCart) {
    productInCart.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

export default handleAddToCart;
