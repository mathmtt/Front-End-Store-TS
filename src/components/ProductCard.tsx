type ProductCardProps = {
  title: string;
  thumbnail: string;
  price: number;
};

function ProductCard(props: ProductCardProps) {
  const { title, thumbnail, price } = props;
  return (
    <div
      className="productCard"
      data-testid="product"
    >
      <h3>{title}</h3>
      <img
        src={ thumbnail }
        alt="Product"
      />
      <p>
        {' '}
        {`R$ ${price}`}
        {' '}
      </p>
    </div>
  );
}

export default ProductCard;
