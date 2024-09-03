function RecommendedTracks({ items }) {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-xl md:text-2xl text-center ">Vibes in Sync</h4>
      {items.map((e, i) => (
        <div
          key={i}
          className="group p-2 pb-4 md:pb-2 hover:bg-zinc-800 w-full flex flex-col md:flex-row justify-center items-center rounded-md"
        >
          <img
            alt="Song img"
            src={e.album?.images?.[1]?.url}
            className="object-cover aspect-square w-full md:w-[100px]"
          />
          <h3 className="font-light text-lg text-center md:text-start md:text-xl lg:text-2xl text-gray-400 ms-2 text-ellipsis w-full overflow-x-hidden">
            {e.name}
          </h3>
          <div className="flex-1 flex justify-end sm:mr-4 transition-all duration-75 visible md:invisible md:mt-12 group-hover:mt-0 group-hover:visible">
            <a
              className="mt-2 w-10 h-10 flex justify-center items-center bg-[#1db954] rounded-full text-sm md:text-base hover:bg-[#138a3d]"
              href={e?.external_urls?.spotify}
            >
              <img
                className="w-[21px] md:w-[24px]"
                src="/Spotify_Icon_RGB_White.png"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecommendedTracks;
