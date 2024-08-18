import { MdArrowForward } from "react-icons/md";

function TopTrack({ item }) {
  function convertDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  return (
    <div className="p-2 hover:bg-zinc-800 flex rounded-md">
      <img
        className="w-[64px] aspect-square object-cover"
        src={item.album?.images?.[1].url}
      />
      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center ms-2 font-light text-base sm:text-lg w-full sm:me-10">
        <h4 className="sm:flex-1 me-2">{item.name}</h4>
        <h5 className="text-gray-400">{convertDuration(item.duration_ms)}</h5>
      </div>
      <button className="w-56 sm:w-44 h-10 self-center rounded-full bg-[#ff4a01] flex justify-center items-center hover:bg-[#ff672b] shadow-2xl shadow-zinc-600">
        Tune into &nbsp;
        <MdArrowForward />
      </button>
    </div>
  );
}

export default TopTrack;
