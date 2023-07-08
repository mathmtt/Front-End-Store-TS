export type ListProductType = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  quantity?: number;
};

export type FormType = {
  fullName: string;
  cpf: string;
  email: string;
  phone: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  city: string;
};
