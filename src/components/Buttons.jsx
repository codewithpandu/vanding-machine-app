export const MoneyButtons = ({ children }) => {
  return (
    <button
      type="button"
      class="text-white text-xs bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base px-4 py-2.5 text-center leading-5"
    >
      {children}
    </button>
  );
};
