import { useParams } from "react-router-dom";
import { checkToken } from "../../utils/auth";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import TopTrack from "../../components/TopTrack";

function ArtistDetail() {
  const { id } = useParams();

  const [artist, setArtist] = useState({});
  const [tracks, setTracks] = useState([]);

  const getDetails = async () => {
    const token = await checkToken();

    axios
      .get("https://api.spotify.com/v1/artists/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setArtist(res.data);
      });
  };

  const getTracks = async () => {
    const token = await checkToken();

    axios
      .get("https://api.spotify.com/v1/artists/" + id + "/top-tracks", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res.data.tracks);
        setTracks(res.data.tracks);
      });
  };

  useEffect(() => {
    getDetails();
    getTracks();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src={
            artist?.images?.[0]?.url ??
            "https://i.scdn.co/image/ab6761610000517476b4b22f78593911c60e7193"
          }
          className="w-[160px] sm:w-[320px] aspect-square object-cover"
        />
        <div className="flex flex-col justify-center ms-4">
          <h1 className="text-4xl sm:text-8xl font-extrabold">
            {artist?.name}
          </h1>
          <h2 className="mt-2 text-xl sm:text-2xl text-gray-400">
            {artist?.followers?.total} Follower
            {artist?.followers?.total > 1 ? "s" : null}
          </h2>
        </div>
      </div>

      <div className="bg-zinc-800 w-full h-1 my-10"></div>

      <h3 className="text-2xl sm:text-4xl mb-4">Top Tracks</h3>
      {tracks.map((e, i) => (
        <TopTrack key={i} item={e} />
      ))}

      <p className="mt-10 text-gray-400">
        Can’t spot the track you’re after? Slide over to the Songs Tab and hunt
        it down!
      </p>
    </div>
  );
}

export default ArtistDetail;
