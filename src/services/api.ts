export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}
type GetProductsFromCategoryAndQueryProps = {
  categoryId: string;
  query: string;
};

export async function getProductsFromCategoryAndQuery(
  { categoryId, query }:GetProductsFromCategoryAndQueryProps,
) {
  const API = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await API.json();
  console.log(data);
  return data;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
