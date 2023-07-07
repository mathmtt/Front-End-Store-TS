export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(query = '', categoryId = '') {
  if (categoryId) {
    const API = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const data = await API.json();
    return data;
  }
  if (query) {
    const API = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await API.json();
    return data;
  }
}

export async function getProductById(id: string) {
  const API = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const data = await API.json();
  return data;
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
