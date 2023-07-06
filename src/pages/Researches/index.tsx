import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../../components/Categories';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import { ListProductType } from '../../types';
import ProductCard from '../../components/ProductCard';

type CategoryType = { id: string; name: string };

function Search() {
  const [listProducts, setListProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue) {
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
    console.log('Use Effect');
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
            <Categories key={ category.id } name={ category.name } id={ category.id } />
          ))
        )}
      </aside>
      <section>
        { listProducts.length !== 0
          ? listProducts.map((product: ListProductType) => (
            <ProductCard
              key={ product.id }
              title={ product.title }
              thumbnail={ product.thumbnail }
              price={ product.price }
            />
          ))
          : <h2> Nenhum produto foi encontrado </h2>}
      </section>
    </>
  );
}

export default Search;
