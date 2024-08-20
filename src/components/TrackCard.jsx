import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function TrackCard({ item }) {
  const formater = new Intl.ListFormat("en");

  const navigate = useNavigate();

  return (
    <div className="group flex p-2 hover:bg-zinc-800 rounded-md">
      <img
        src={
          item?.album?.images?.[1]?.url ??
          "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2"
        }
        className="w-[90px] sm:w-[90px] md:w-[120px] aspect-square object-cover"
      />
      <div className="flex flex-col justify-center ms-2 font-light text-sm sm:text-base">
        <h1>{item.name}</h1>
        <h2 className="text-gray-400 hidden md:block">
          {formater.format(item.artists.map((a) => a.name))}
        </h2>
        <button onClick={() => navigate("/songs/" + item.id)} className="items-center justify-center p-1 rounded-full bg-[#ff4a01] hover:bg-[#ff672b] transition-all duration-75 w-28 mt-4 hidden group-hover:flex group-hover:mt-2 text-sm sm:text-base">
          Tune into &nbsp;
          <MdArrowForward />{" "}
        </button>
      </div>
    </div>
  );
}

export default TrackCard;
