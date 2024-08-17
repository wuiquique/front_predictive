import { MdSearch } from "react-icons/md";

function SearchControl({ placeholder, query, setQuery }) {
  return (
    <div className="group relative mb-6">
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none">
        <MdSearch
          className="group-focus-within:text-white text-gray-500"
          size={24}
        />
      </div>
      <input
        type="text"
        className="text-white border-b border-gray-500 border-solid bg-transparent rounded-none w-full ps-8 p-2 focus:outline-none focus:border-white"
        placeholder={placeholder}
        value={query}
        onChange={(ev) => setQuery(ev.currentTarget.value)}
      />
    </div>
  );
}

export default SearchControl;
