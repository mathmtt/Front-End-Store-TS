type CategoriesProps = {
  id: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Categories({ id, name, handleChange }: CategoriesProps) {
  return (
    <div>
      <label
        data-testid="category"
        htmlFor={ id }
      >
        {name}
        <input
          onChange={ handleChange }
          type="radio"
          name="category"
          id={ id }
          value={ name }
          key={ id }
        />
      </label>
    </div>
  );
}

export default Categories;
