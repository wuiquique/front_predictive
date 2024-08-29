import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function TopTrack({ item }) {
  const convertDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  const navigate = useNavigate();

  return (
    <div className="p-2 hover:bg-zinc-800 flex rounded-md">
      <img
        className="w-[64px] aspect-square object-cover"
        src={
          item.album?.images?.[1].url ??
          "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2"
        }
      />
      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center ms-2 font-light text-base sm:text-lg w-full sm:me-10">
        <h4 className="sm:flex-1 me-2">{item.name}</h4>
        <h5 className="text-gray-400 text-xs sm:text-sm">
          {convertDuration(item.duration_ms)}
        </h5>
      </div>
      <button
        onClick={() => navigate("/songs/" + item.id)}
        className="w-56 sm:w-44 h-10 self-center rounded-full bg-[#ff4a01] flex justify-center items-center hover:bg-[#ff672b] shadow-2xl shadow-zinc-600 text-sm sm:text-base"
      >
        Tune into &nbsp;
        <MdArrowForward />
      </button>
    </div>
  );
}

export default TopTrack;
