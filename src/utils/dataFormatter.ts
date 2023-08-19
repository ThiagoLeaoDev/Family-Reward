
export const MoneyFormatter = (value: number) => {
  console.log(value);
  return value?.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
