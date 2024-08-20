import { useState } from "react";
import SearchControl from "../../components/Form/SearchControl";
import SearchBoton from "../../components/Form/SearchBoton";
import { checkToken } from "../../utils/auth";
import axios from "axios";
import NoResults from "../../components/NoResults";
import TrackCard from "../../components/TrackCard";

function Songs() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);

  const searchSongs = async () => {
    if (query) {
      const token = await checkToken();
      axios
        .get(
          "https://api.spotify.com/v1/search?q=" +
            query +
            "&type=track" +
            "&limit=" +
            30 +
            "&offset=" +
            0,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setSongs(res.data.tracks.items);
        });
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-3/5 me-8">
          <SearchControl placeholder="Song" query={query} setQuery={setQuery} />
        </div>
        <SearchBoton handleSearch={searchSongs} />
      </div>
      <div>
        {songs.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-0">
            {songs.map((e, i) => (
              <TrackCard key={i} item={e} />
            ))}
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
}

export default Songs;
