import { useState } from "react";
import SearchBoton from "../components/Form/SearchBoton";
import SearchControl from "../components/Form/SearchControl";
import axios from "axios";
import { checkToken } from "../utils/auth";
import NoResults from "../components/NoResults";

function Artists() {
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const SearchArtists = async () => {
    if (query) {
      const token = await checkToken();
      axios
        .get(
          "https://api.spotify.com/v1/search?q=" +
            query +
            "&type=artist" +
            "&limit=" +
            limit +
            "&offset=" +
            offset,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setArtists(res.data.artists.items);
        });
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-3/5 me-8">
          <SearchControl
            placeholder="Artist"
            query={query}
            setQuery={setQuery}
          />
        </div>
        <SearchBoton handleSearch={SearchArtists} />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col sm:items-start w-10/12">
          {artists.length > 0 ? (
            <div>
              {artists.map((e, i) => (
                <div key={i}>
                    <img src={e.images[0]?.url} height={640} width={640} />
                </div>
              ))}
            </div>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </div>
  );
}

export default Artists;
