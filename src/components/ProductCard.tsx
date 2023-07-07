// import { Link } from 'react-router-dom';

type ProductCardProps = {
  title: string;
  thumbnail: string;
  price: number;
  id: string;
};

function ProductCard(props: ProductCardProps) {
  const { title, thumbnail, price, id } = props;
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
