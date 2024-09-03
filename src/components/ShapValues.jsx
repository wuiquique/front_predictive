function ShapValues({ title, items, shap, features }) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const convertDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col items-center">
      <h4 className="text-4xl">{title}</h4>
      <div className="flex flex-col w-full px-0 sm:px-4 md:px-8 lg:px-16">
        {items.map((e, i) => (
          <div
            key={i}
            className="group mb-6 py-2 px-2 lg:px-6 hover:bg-zinc-800 rounded-md flex flex-col sm:flex-row justify-between items-center"
          >
            <div>
              <h6 className="text-gray-400 text-center text-lg sm:text-base sm:text-start transition-all duration-200 group-hover:text-[#ff4a01] group-hover:sm:text-2xl group-hover:md:text-3xl group-hover:lg:text-3xl">
                {capitalizeFirstLetter(e)}
              </h6>
              <h5 className="text-2xl sm:text-xl font-light text-center sm:text-start">
                {e === "signature"
                  ? features.time_signature + "/4"
                  : e === "duration"
                  ? convertDuration(features.duration_ms)
                  : e === "loudness"
                  ? features.loudness + " dBs"
                  : e === "mode"
                  ? features.mode === 1
                    ? "Major"
                    : "Minor"
                  : e === "key"
                  ? features.key === 0
                    ? "C"
                    : features.key === 1
                    ? "C#"
                    : features.key === 2
                    ? "D"
                    : features.key === 3
                    ? "D#"
                    : features.key === 4
                    ? "E"
                    : features.key === 5
                    ? "F"
                    : features.key === 6
                    ? "F#"
                    : features.key === 7
                    ? "G"
                    : features.key === 8
                    ? "G#"
                    : features.key === 9
                    ? "A"
                    : features.key === 10
                    ? "A#"
                    : features.key === 11
                    ? "B"
                    : features.key
                  : e === "tempo"
                  ? features.tempo.toFixed(0) + " bpm"
                  : features[e]}
              </h5>
            </div>
            <h6 className="text-end sm:text-start text-gray-400 sm:text-transparent transition-all duration-200 group-hover:sm:text-3xl group-hover:md:text-4xl group-hover:lg:text-5xl group-hover:text-gray-400">
              {(shap[e] * 100).toFixed(2)}%
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShapValues;
