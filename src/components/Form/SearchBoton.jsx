import { MdSearch } from "react-icons/md";

function SearchBoton({ handleSearch }) {
  return (
    <button
      onClick={handleSearch}
      className="w-28 p-1 rounded-full bg-[#ff4a01] flex justify-center items-center hover:bg-[#ff672b] shadow-2xl shadow-zinc-600"
    >
      Search
    </button>
  );
}

export default SearchBoton;
