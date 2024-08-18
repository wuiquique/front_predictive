import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ArtistCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="group hover:bg-zinc-800 p-4 rounded-md">
      <img
        src={
          item.images[0]?.url ??
          "https://i.scdn.co/image/ab6761610000517476b4b22f78593911c60e7193"
        }
        className="w-[640px] aspect-square object-cover"
      />
      <h3 className="text-lg font-extralight">{item.name}</h3>
      <h4 className="text-base font-thin text-gray-400">
        {item.followers?.total} Follower
        {item.followers?.total > 1 ? "s" : null}
      </h4>
      <div className="flex justify-end mt-2">
        <button
          onClick={() => navigate(item.id)}
          className="w-32 p-1 rounded-full bg-[#ff4a01] flex justify-center items-center hover:bg-[#ff672b] transition-all duration-75 invisible mt-2 group-hover:mt-0 group-hover:visible shadow-2xl shadow-zinc-600"
        >
          Vibe with
          &nbsp;
          <MdArrowForward />
        </button>
      </div>
    </div>
  );
}

export default ArtistCard;
