export const MoneyButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white text-xs bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base px-4 py-2.5 text-center leading-5"
    >
      {children}
    </button>
  );
};

export const WhiteButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
    >
      {children}
    </button>
  );
};
export const BlueButton = ({ disable, children, onClick }) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      type="button"
      className="text-white w-full bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
    >
      {children}
    </button>
  );
};
