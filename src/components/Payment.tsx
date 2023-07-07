type PaymentProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Payment(props: PaymentProps) {
  const { onChange } = props;
  return (
    <div>
      <p>Boleto</p>
      <label htmlFor="boleto">
        <input
          type="radio"
          name="payment"
          id="boleto"
          value="boleto"
          data-testid="ticket-payment"
          onChange={ onChange }
        />
      </label>
      <p>Cartão de Crédito</p>
      <label htmlFor="visa">
        <input
          type="radio"
          name="payment"
          id="visa"
          value="visa"
          data-testid="visa-payment"
          onChange={ onChange }
        />
        Visa
      </label>
      <label htmlFor="mastercard">
        <input
          type="radio"
          name="payment"
          id="mastercard"
          value="mastercard"
          data-testid="master-payment"
          onChange={ onChange }
        />
        MasterCard
      </label>
      <label htmlFor="elo">
        <input
          type="radio"
          name="payment"
          id="elo"
          value="elo"
          data-testid="elo-payment"
          onChange={ onChange }
        />
        Elo
      </label>
    </div>
  );
}

export default Payment;
