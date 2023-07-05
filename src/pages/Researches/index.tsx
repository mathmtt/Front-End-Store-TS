import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [listProducts, setListProducts] = useState([]);
  const navigate = useNavigate();
  return (
    <>
      <form>
        <input type="text" />
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
    </>
  );
}

export default Search;
