function RelatedArtists({ items }) {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-2xl">Artists to Collab With</h4>
      {items.map((e, i) => (
        <div
          key={i}
          className="group p-2 hover:bg-zinc-800 w-full flex items-center rounded-md"
        >
          <img alt="Artist img" src={e.images?.[1]?.url} className="object-cover aspect-square w-[120px]" />
          <h3 className="font-light text-2xl text-gray-400 ms-2">{e.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default RelatedArtists;
