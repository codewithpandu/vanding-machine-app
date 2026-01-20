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
import { MoneyButtons } from "./components/Buttons";

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

function App() {
  const [product, setProduct] = useState(null);

  const selectedProduct = (selectProduct) => {
    setProduct(selectProduct);
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

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
              <h2 className="py-2 text-2xl font-bold -mt-2">Rp.10000</h2>
              <p className="mb-2">Masukkan Uang</p>
              <div className="flex gap-4 flex-wrap justify-evenly">
                <MoneyButtons>Rp.5000</MoneyButtons>
                <MoneyButtons>Rp.10.000</MoneyButtons>
                <MoneyButtons>Rp.20.000</MoneyButtons>
                <MoneyButtons>Rp.50.000</MoneyButtons>
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
              <div className="flex mt-4 md:mt-6 gap-4">
                <button
                  type="button"
                  className="inline-flex items-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
