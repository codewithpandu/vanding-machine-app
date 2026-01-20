const ProductCard = ({ title, image, stock, price, selectProduct }) => {
  return (
    <button
      onClick={selectProduct}
      type="button"
      className="relative cursor-pointer bg-slate-200 max-w-50 w-full p-4 border border-default rounded-base shadow-xs focus:shadow-md focus:shadow-slate-600"
    >
      <span className="absolute top-2 left-2 z-10 bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded">
        {stock}
      </span>

      <div className="flex flex-col items-center">
        <img
          className="w-24 h-24 mb-6 rounded-full"
          src={image}
          alt="Bonnie image"
        />
        <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">
          {title}
        </h5>
        <span>{price}</span>
      </div>
    </button>
  );
};

export default ProductCard;
