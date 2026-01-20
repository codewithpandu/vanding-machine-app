import ProductCard from "./components/Card";
import Donut from "../src/assets/img/donut.png";
import Milk from "../src/assets/img/milk.png";
import Cholocate from "../src/assets/img/chocolate-bar.png";
import Juice from "../src/assets/img/juice-box.png";
import Orange from "../src/assets/img/orange.png";
import Water from "../src/assets/img/water.png";
import Coffee from "../src/assets/img/coffee-cup.png";
import Snack from "../src/assets/img/snack.png";
import rupiahCurrency from "./utils/Currency";
import { useEffect, useState } from "react";
import { MoneyButton, WhiteButton, BlueButton } from "./components/Buttons";

const products = [
  {
    id: 1,
    title: "Donat",
    image: Donut,
    stock: "5",
    price: "10000",
  },
  {
    id: 2,
    title: "Susu",
    image: Milk,
    stock: "5",
    price: "8000",
  },
  {
    id: 3,
    title: "Coklat",
    image: Cholocate,
    stock: "4",
    price: "20000",
  },
  {
    id: 4,
    title: "Jus Buah",
    image: Juice,
    stock: "6",
    price: "12000",
  },
  {
    id: 5,
    title: "Jeruk",
    image: Orange,
    stock: "9",
    price: "10000",
  },
  {
    id: 6,
    title: "Air Mineral",
    image: Water,
    stock: "3",
    price: "3000",
  },
  {
    id: 7,
    title: "Snack",
    image: Snack,
    stock: "3",
    price: "7000",
  },
  {
    id: 8,
    title: "Kopi",
    image: Coffee,
    stock: "3",
    price: "30000",
  },
];

const listMoney = [5000, 10000, 20000, 50000];

function App() {
  const [product, setProduct] = useState(null);
  const [money, setMoney] = useState(0);

  const handleMoney = (value) => {
    setMoney(money + value);
  };
  const selectedProduct = (selectProduct) => {
    setProduct(selectProduct);
  };

  const handleBuy = () => {
    if (product && money >= product.price) {
      setMoney(money - product.price);
      setProduct({ ...product, stock: product.stock - 1 });
    } else {
      alert("Uang tidak mencukupi");
    }
  };

  const buyValidate = () => {
    if (product && money >= product.price) {
      return true;
    }
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  // useEffect(() => {
  //   console.log(money);
  // }, [money]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-4">
        Vanding Machine App
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
                selectProduct={() => selectedProduct(product)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-3xl md:col-span-3 p-4 bg-slate-100">
          <div className="bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-base shadow-xs">
            <div className="flex flex-col items-center">
              <h2 className="py-2">Uang</h2>
              <h2 className="py-2 text-xl lg:text-2xl font-bold -mt-2">
                {rupiahCurrency(money)}
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
              {!product && <h2 className="py-2 text-lg">Pilih menu</h2>}
              {product && (
                <div className="flex flex-col items-center">
                  <img
                    className="w-24 h-24 mb-6 rounded-full"
                    src={product.image}
                    alt="Bonnie image"
                  />
                  <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">
                    {product.title}
                  </h5>
                  <span>{rupiahCurrency(product.price)}</span>
                </div>
              )}
              <div className="grid grid-cols-2 mt-4 md:mt-6 gap-4">
                <div className="col-span-2">
                  <BlueButton
                    disable={!buyValidate()}
                    onClick={() => handleBuy()}
                  >
                    {product ? "Beli" : "Pilih menu"}
                  </BlueButton>
                </div>
                <div className="col-span-2">
                  {product && money < product.price && (
                    <p className="text-center">Uang tidak cukup</p>
                  )}
                </div>
                <WhiteButton onClick={() => setProduct(null)}>
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
