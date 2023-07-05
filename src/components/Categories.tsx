import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

const INITIAL_STATE = [{ id: '', name: '' }];

function Categories() {
  const [categories, setCategories] = useState(INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCategories();
      setCategories(response);
    };
    fetchData();
  }, []);

  return (
    <div>
      Categorias:
      { categories.length !== 0
      && categories.map((category) => {
        return (
          <>
            <label
              data-testid="category"
              htmlFor={ category.name }
              key={ category.id }
            >
              {category.name}
            </label>
            <input type="radio" name="category" value={ category.name } />
          </>
        );
      })}
    </div>
  );
}

export default Categories;
