type CheckoutFormProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CheckoutForm(props: CheckoutFormProps) {
  const { onChange } = props;
  return (
    <div>
      <div>
        <input
          type="text"
          name="fullName"
          id=""
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          onChange={ onChange }
          // required
        />
        <input
          type="text"
          name="cpf"
          id=""
          data-testid="checkout-cpf"
          onChange={ onChange }
          placeholder="cpf"
          // required
        />
        <input
          type="email"
          name="email"
          id=""
          data-testid="checkout-email"
          onChange={ onChange }
          placeholder="Email"
          // required
        />
        <input
          type="text"
          name="phone"
          id=""
          onChange={ onChange }
          data-testid="checkout-phone"
          // required
          placeholder="Telefone"
        />
      </div>
      <div>
        <input
          type="text"
          name="cep"
          id=""
          data-testid="checkout-cep"
          onChange={ onChange }
          // required
          placeholder="CEP"
        />
        <input
          type="text"
          name="address"
          id=""
          data-testid="checkout-address"
          onChange={ onChange }
          // required
          placeholder="Endereço"
        />
      </div>
      {/* <div>
        <input
          type="text"
          name="complement"
          id=""
          onChange={ onChange }
          // required
          placeholder="Complemento"
        />
        <input
          type="text"
          name="number"
          id=""
          onChange={ onChange }
          // required
          placeholder="Número"
        />
        <input
          type="text"
          name="city"
          id=""
          onChange={ onChange }
          // required
          placeholder="Cidade"
        />
      </div> */}
    </div>
  );
}

export default CheckoutForm;
