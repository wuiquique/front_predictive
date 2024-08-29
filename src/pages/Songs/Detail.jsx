import axios from "axios";
import { checkToken } from "../../utils/auth";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import "./Detail.css";
import ShapValues from "../../components/ShapValues";

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
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold max-w-3xl">
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
        <div className="flex flex-col">
          <div className="flex justify-center mb-8">
            <div className="py-1 px-10 bg-zinc-800 rounded-lg">
              Popularity Prediction Score
            </div>
          </div>
          <div
            className="bg-[#ff4a01] h-10 relative rounded-tr-3xl"
            style={{
              width: `${(prediction.prediction * 100).toFixed(0)}%`,
            }}
          ></div>
          <div className="flex justify-center text-[150px] sm:text-[200px] md:text-[300px] font-extrabold text-white -my-10 sm:-my-14 md:-my-20">
            {(prediction.prediction * 100).toFixed(0)}%
          </div>
          <div className="flex justify-center mt-16">
            <div className="py-1 px-10 bg-zinc-800 rounded-lg">
              Influencing Factors
            </div>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <ShapValues
              items={Object.keys(prediction.shap_values).filter(
                (key) => prediction.shap_values[key] > 0 && key !== "year"
              )}
              title="Positives"
              shap={prediction.shap_values}
              features={features}
            />
            <ShapValues
              items={Object.keys(prediction.shap_values).filter(
                (key) => prediction.shap_values[key] < 0 && key !== "year"
              )}
              title="Negatives"
              shap={prediction.shap_values}
              features={features}
            />
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
