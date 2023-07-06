import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../../components/Categories';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ListProductType } from '../../types';

function Search() {
  const [listProducts, setListProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');
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
      console.log(response.results);
    }
  };

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
      <Categories />
      <section>
        { listProducts.length !== 0
          ? listProducts.map((product: ListProductType) => (
            <div
              className="productCard"
              data-testid="product"
              key={ product.id }
            >
              <h3>{product.title}</h3>
              <img
                src={ product.thumbnail }
                alt="Product"
              />
              <p>
                {' '}
                {`R$ ${product.price}`}
                {' '}
              </p>
            </div>
          ))
          : <h2> Nenhum produto foi encontrado </h2>}
      </section>
    </>
  );
}

export default Search;
