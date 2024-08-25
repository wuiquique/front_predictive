import axios from "axios";
import { checkToken } from "../../utils/auth";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import "./Detail.css";

function SongDetail() {
  const { id } = useParams();

  const [track, setTrack] = useState({});
  const [features, setFeatures] = useState({});
  const [prediction, setPrediction] = useState({});
  const [loading, setLoading] = useState(false);

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
        console.log(res.data);
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

  const getPrediction = () => {
    setLoading(true);
    const data = {
      year: track.album.release_date.split("-")[0],
      duration: features.duration_ms,
      key: features.key,
      loudness: features.loudness,
      mode: features.mode,
      tempo: features.tempo,
      signature: features.time_signature,
    };
    axios
      .post("http://localhost:8000/predict", data)
      .then((res) => {
        console.log(res.data);
        setPrediction(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
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
          <h1 className="text-4xl md:text-8xl font-extrabold max-w-3xl">
            {track.name}
          </h1>
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

      <div className="bg-zinc-800 w-full h-1 my-10"></div>

      {prediction.prediction ? (
        <div className="flex justify-center">
          <div className="bg-zinc-800 p-6 rounded-xl shadow-zinc-700 shadow-sm">
            <div className="w-96 h-48 rounded-t-full relative" style={{
                backgroundImage: "conic-gradient(from 90deg, at 50% 100%, #ff4a01, transparent)"
            }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-zinc-800 w-72 h-36 rounded-t-full flex justify-center items-end text-6xl">
                {(prediction.prediction * 100).toFixed(0)}%
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="my-20 flex flex-col items-center">
          {loading ? (
            <AiOutlineLoading
              className="animate-spin fill-[#ff4a01] mt-6"
              size={36}
            />
          ) : (
            <>
              <h1 className="text-4xl text-gray-400 font-semibold tracking-wider mb-4 relative border-r-2 border-solid border-[rgba(255,255,255,.75)] text-center whitespace-nowrap overflow-hidden anim-typewriter">
                HIT OR MISS?
              </h1>
              <button
                onClick={getPrediction}
                className="text-2xl bg-[#ff4a01] p-2 w-60 rounded-full hover:bg-[#ff672b]"
              >
                Predict Now
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SongDetail;
