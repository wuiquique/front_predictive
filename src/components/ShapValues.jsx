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
      <div className="flex flex-col w-full">
        {items.map((e, i) => (
          <div
            key={i}
            className="group mb-6 py-2 px-2 lg:px-6 hover:bg-zinc-800 rounded-md"
          >
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div>
                <h6 className="text-gray-400 text-center text-lg sm:text-base sm:text-start transition-all duration-200 group-hover:text-[#ff4a01] group-hover:sm:text-2xl group-hover:md:text-3xl group-hover:lg:text-3xl">
                  {capitalizeFirstLetter(e)}
                </h6>
                <h5 className="text-2xl sm:text-2xl font-light text-center sm:text-start">
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
            {e === "signature" && features.time_signature === 4 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  A Crowd Favorite
                </h5>
                <h6 className="hidden md:group-hover:block">
                  The 4/4 time signature is widely favored by listeners,
                  offering a familiar and steady rhythm that makes it the most
                  popular choice in modern music across genres.
                </h6>
              </>
            ) : e === "signature" && features.time_signature !== 4 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Creative, Yet Less Popular Time Signatures
                </h5>
                <h6 className="hidden md:group-hover:block">
                  While {features.time_signature}/4 time signature bring unique
                  and creative rhythms, they tend to appeal to niche audiences
                  and are generally less popular with mainstream listeners.
                </h6>
              </>
            ) : e === "loudness" && features.loudness < -10 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Lower Loudness, Less Popular
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs with loudness levels below -10dB tend to be less
                  popular, as modern trends favor higher dB levels that deliver
                  a fuller, more impactful sound.
                </h6>
              </>
            ) : e === "loudness" &&
              features.loudness >= -10 &&
              features.loudness <= 0 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Optimal Loudness
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Tracks with loudness between -10dB and 0dB generally achieve
                  greater popularity, aligning with current trends for louder,
                  more engaging audio experiences.
                </h6>
              </>
            ) : e === "loudness" && features.loudness > 0 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Slightly Less Popular
                </h5>
                <h6 className="hidden md:group-hover:block">
                  While tracks with loudness above 0dB are slightly less
                  popular, there’s a growing trend toward higher loudness
                  levels, suggesting potential future shifts in listener
                  preferences.
                </h6>
              </>
            ) : e === "duration" && shap[e] > 0 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Ideal Duration
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs lasting aprox between 2 minutes and 3 minutes and a half
                  tend to be more popular, as they align with listener
                  preferences for concise yet engaging content.
                </h6>
              </>
            ) : e === "duration" &&
              shap[e] < 0 &&
              features.duration_ms < 130000 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Quick Jams, Less Hype
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs under 2 minutes tend to have lower popularity, as they
                  may not provide enough time to fully engage listeners compared
                  to longer tracks.
                </h6>
              </>
            ) : e === "duration" &&
              shap[e] < 0 &&
              features.duration_ms > 220000 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Long Plays, Low Vibes
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs over 3 minutes and a half tend to be less popular, as
                  longer durations can lose listener attention in today’s
                  fast-paced music landscape.
                </h6>
              </>
            ) : e === "tempo" && shap[e] > 0 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Mid-Tempo, Max Hype
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs with tempos between 80 and 130 BPM tend to be the most
                  popular, striking the perfect balance for danceability and
                  listener engagement.
                </h6>
              </>
            ) : e === "tempo" && shap[e] < 0 && features.tempo < 80 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Slow Beats, Low Heat
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs with tempos below 80 BPM generally have lower
                  popularity, as slower rhythms often struggle to capture
                  widespread listener attention.
                </h6>
              </>
            ) : e === "tempo" && shap[e] < 0 && features.tempo > 130 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Blazing Beats Burning Out
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs with tempos above 130 BPM tend to see a drop in
                  popularity, as faster beats can sometimes overwhelm listeners,
                  making them less appealing to the mainstream.
                </h6>
              </>
            ) : e === "mode" && features.mode === 1 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Major Vibes
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Tracks in a major scale get a bit more love, but it’s not a
                  game-changer. Don’t sweat it—your creativity with the mode
                  won’t hold your track back.
                </h6>
              </>
            ) : e === "mode" && features.mode === 0 ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Minor Mood
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs in a minor scale might see a slight dip in popularity,
                  but it’s nothing major. Go ahead and flex your creativity—the
                  mode won’t make a huge difference.
                </h6>
              </>
            ) : e === "key" &&
              (features.key === 0 ||
                features.key === 2 ||
                features.key === 4 ||
                features.key === 7 ||
                features.key === 9) ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  The Sweet Spot
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Tracks in these key get a slight popularity bump, but it’s
                  nothing huge. Still, if you’re aiming for that extra edge,
                  these note might help.
                </h6>
              </>
            ) : e === "key" &&
              (features.key === 1 ||
                features.key === 3 ||
                features.key === 5 ||
                features.key === 6 ||
                features.key === 8 ||
                features.key === 10 ||
                features.key === 11) ? (
              <>
                <h5 className="text-gray-400 transition-all duration-200 group-hover:mt-2 text-center sm:text-start">
                  Odd Key
                </h5>
                <h6 className="hidden md:group-hover:block">
                  Songs in keys outside of C, D, E, G, and A see a slight drop
                  in popularity. If you’re looking for that extra boost,
                  sticking with the more popular keys might give you an edge.
                </h6>
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShapValues;
