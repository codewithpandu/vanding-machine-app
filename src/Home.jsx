import ProductCard from "./components/Card";
import rupiahCurrency from "./utils/Currency";
import { useEffect, useState } from "react";
import { MoneyButton, WhiteButton, BlueButton } from "./components/Buttons";
import { productImages } from "./utils/ProductImage";

const listMoney = [5000, 10000, 20000, 50000];

function App() {
  const [products, setProducts] = useState([]);
  const [money, setMoney] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [status, setStatus] = useState(false);

  const handleMoney = (value) => {
    setMoney(money + value);
  };
  const chooseProduct = (product) => {
    setSelectedProduct(product);
    console.log(product);
    setStatus(false);
    setMoney(0);
  };

  const handleBuy = () => {
    if (selectedProduct && money >= selectedProduct.price) {
      setStatus(true);

      setMoney(money - selectedProduct.price);

      setSelectedProduct({
        ...selectedProduct,
        stock: selectedProduct.stock - 1,
      });
    }
  };

  const buyValidate = () => {
    if (selectedProduct && money >= selectedProduct.price) {
      return true;
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((item) => ({
          ...item,
          image: productImages[item.image],
        }));
        console.log("API response:", data);
        setProducts(mapped);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-4">
        Vending Machine App
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
        <div className="md:col-span-9 p-8 gap-4 justify-center rounded-3xl bg-slate-100">
          <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                stock={product.stock}
                price={rupiahCurrency(product.price)}
                selectProduct={() => chooseProduct(product)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-3xl md:col-span-3 p-4 bg-slate-100">
          <div className="bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-base shadow-xs">
            <div className="flex flex-col items-center">
              <h2 className="py-2">Uang</h2>
              <h2 className="py-2 text-xl lg:text-2xl font-bold -mt-2">
                {status ? rupiahCurrency(money) : rupiahCurrency(money)}
              </h2>
              <p className="mb-2 text-center">Masukkan Uang</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {listMoney.map((money) => (
                  <MoneyButton key={money} onClick={() => handleMoney(money)}>
                    {rupiahCurrency(money)}
                  </MoneyButton>
                ))}
              </div>
            </div>
          </div>
          <div className="relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-base shadow-xs">
            <div className="flex flex-col items-center">
              {!selectedProduct && <h2 className="py-2 text-lg">Pilih menu</h2>}
              {selectedProduct && (
                <div className="flex flex-col items-center">
                  <img
                    className="w-24 h-24 mb-6 rounded-full"
                    src={selectedProduct.image}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">
                    {selectedProduct.title}
                  </h5>
                  <span>{rupiahCurrency(selectedProduct.price)}</span>
                </div>
              )}
              <div className="grid grid-cols-2 mt-4 md:mt-6 gap-4">
                <div className="col-span-2">
                  <BlueButton
                    disable={!buyValidate()}
                    onClick={() => handleBuy()}
                  >
                    {selectedProduct ? "Beli" : "Pilih menu"}{" "}
                    {status && " lagi"}
                  </BlueButton>
                </div>
                <div className="col-span-2">
                  {status && (
                    <div>
                      <p className="text-center">Terimakasih sudah membeli</p>
                      <p className="text-center">
                        Kembalian {rupiahCurrency(money)}
                      </p>
                    </div>
                  )}
                </div>
                <WhiteButton
                  onClick={() => {
                    setSelectedProduct(null);
                    setStatus(false);
                  }}
                >
                  Cancel
                </WhiteButton>
                <WhiteButton onClick={() => setMoney(0)}>Refund</WhiteButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
