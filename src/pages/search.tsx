import { useState } from 'react';

function Search() {
  const [listProducts, setListProducts] = useState([]);
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
    </>
  );
}

export default Search;
