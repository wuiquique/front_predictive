function TrackCard({ item }) {
  return (
    <div className="flex p-2 hover:bg-zinc-800 rounded-md">
      <img src={item?.album?.images?.[1]?.url} className="w-[120px]" />
    </div>
  );
}

export default TrackCard;
