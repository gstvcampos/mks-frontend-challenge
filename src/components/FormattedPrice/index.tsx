interface FormattedPriceProps {
  price: number | string;
}

export const FormattedPrice = ({ price }: FormattedPriceProps) => {
  const priceNumber = typeof price === 'string' ? parseFloat(price) : price;

  const formattedPrice = priceNumber.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return <>{formattedPrice}</>;
};
