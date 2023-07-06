type CategoryType = { id: string; name: string };

function Categories({ id, name }: CategoryType) {
  // const [selectedCategory, setSelectedCategory] = useState('');

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSelectedCategory(event.target.id);
  //   console.log(event.target.id);
  // };

  return (
    <div>
      <label
        data-testid="category"
        htmlFor={ id }
      >
        {name}
        <input
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
