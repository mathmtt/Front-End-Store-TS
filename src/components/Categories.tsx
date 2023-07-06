import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type CategoryType = { id: string; name: string };

function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

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
          <div
            key={ category.id }
          >
            <label
              data-testid="category"
              htmlFor={ category.name }
            >
              {category.name}
              <input
                type="radio"
                name="category"
                value={ category.name }
                key={ category.id }
              />
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
