const rupiahCurrency = (nominal) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nominal);
};

export default rupiahCurrency;
