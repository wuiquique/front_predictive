import axios from "axios";
import { checkToken } from "../../utils/auth";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function SongDetail() {
  const { id } = useParams();

  const [track, setTrack] = useState({});
  const [features, setFeatures] = useState({});

  const formater = new Intl.ListFormat("en");

  const getTrack = async () => {
    const token = await checkToken();

    axios
      .get("https://api.spotify.com/v1/tracks/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setTrack(res.data);
      });
  };

  const getFeatures = async () => {
    const token = await checkToken();

    axios
      .get("https://api.spotify.com/v1/audio-features/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setFeatures(res.data);
      });
  };

  const getPrediction = async (feat) => {
    console.log(track);
    const data = {
      year: track.album.release_date.split("-")[0],
      duration: feat.duration_ms,
      key: feat.key,
      loudness: feat.loudness,
      mode: feat.mode,
      tempo: feat.tempo,
      signature: feat.time_signature,
    };
    console.log(data);
    // axios.post("http://localhost:8000/predict", data).then((res) => {
    //   console.log(res.data);
    // });
  };

  useEffect(() => {
    getTrack();
    getFeatures();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src={
            track?.album?.images?.[0]?.url ??
            "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2"
          }
          className="w-[160px] md:w-[320px] aspect-square object-cover"
        />
        <div className="flex flex-col justify-center ms-4">
          <h1 className="text-4xl md:text-8xl font-extrabold">{track.name}</h1>
          <h2 className="mt-2 text-xl md:text-2xl text-gray-400">
            {formater.format(track?.artists?.map((a) => a?.name))}
          </h2>
          <a
            className="mt-2 w-44 md:w-56 h-10 flex justify-center items-center bg-[#1db954] rounded-full text-sm md:text-base"
            href={track?.external_urls?.spotify}
          >
            <img
              className="w-[21px] md:w-[24px]"
              src="/Spotify_Icon_RGB_White.png"
            />
            &nbsp; LISTEN ON SPOTIFY
          </a>
        </div>
      </div>
      <div className="my-20 flex justify-center">
      </div>
    </div>
  );
}

export default SongDetail;
