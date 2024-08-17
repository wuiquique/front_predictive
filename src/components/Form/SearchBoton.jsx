import { MdSearch } from "react-icons/md";

function SearchBoton({ handleSearch }) {
  return (
    <button
      onClick={handleSearch}
      className="w-28 p-1 rounded-full font-semibold bg-[#ff4a01] flex justify-center items-center hover:bg-[#ff672b]"
    >
      Search
    </button>
  );
}

export default SearchBoton;
