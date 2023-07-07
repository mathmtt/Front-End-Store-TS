import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import { ListProductType } from '../../types';
import ProductCard from '../../components/ProductCard';

type CategoryType = { id: string; name: string };

function Search() {
  const [listProducts, setListProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [categories, setCategories] = useState<CategoryType[]>([]);

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

  const navigate = useNavigate();

  const handleChangeCategory = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    const response = await getProductsFromCategoryAndQuery('', id);
    setListProducts(response.results);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue !== '') {
      const response = await getProductsFromCategoryAndQuery(inputValue, '');
      setListProducts(response.results);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCategories();
      setCategories(response);
    };
    fetchData();
  }, []);

  return (
    <>
      <form
        onSubmit={ handleSubmit }
      >
        <input
          type="text"
          data-testid="query-input"
          value={ inputValue }
          onChange={ handleChange }
        />
        <button
          data-testid="query-button"
        >
          {' '}
          Pesquisar
          {' '}
        </button>
      </form>
      {listProducts.length === 0 ? (
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      ) : <div />}
      <button
        data-testid="shopping-cart-button"
        onClick={ () => { navigate('/shopping-cart'); } }
      >
        Carrinho
      </button>
      <aside>
        <h3>Categorias</h3>
        {categories.length > 0 && (
          categories.map((category) => (
            <Categories
              key={ category.id }
              name={ category.name }
              id={ category.id }
              handleChange={ handleChangeCategory }
            />
          ))
        )}
      </aside>
      <section>
        { listProducts.length !== 0
          ? listProducts.map((product: ListProductType) => (
            <div key={ product.id }>
              <Link
                data-testid="product-detail-link"
                to={ `product-details/${product.id}` }
              >
                <ProductCard
                  id={ product.id }
                  title={ product.title }
                  thumbnail={ product.thumbnail }
                  price={ product.price }
                />
              </Link>
              <button
                data-testid="product-add-to-cart"
                onClick={ () => handleAddToCart(product) }
              >
                add cart + plus
              </button>
            </div>
          ))
          : <h2> Nenhum produto foi encontrado </h2>}
      </section>
    </>
  );
}

export default Search;
