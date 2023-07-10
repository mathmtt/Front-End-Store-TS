type ProductReviewsProps = {
  email: string;
  rating: number;
  text: string;
};

function ProductReviews(props: ProductReviewsProps) {
  const { email, rating, text } = props;

  return (
    <div>
      <div>
        <p data-testid="review-card-email">
          { email }
        </p>
        <p data-testid="review-card-rating">
          { rating }
        </p>
      </div>
      <div>
        <p data-testid="review-card-evaluation">
          { text }
        </p>
      </div>
      <hr />
    </div>
  );
}

export default ProductReviews;
