import { useState } from "react";
import SearchBoton from "../../components/Form/SearchBoton";
import SearchControl from "../../components/Form/SearchControl";
import axios from "axios";
import { checkToken } from "../../utils/auth";
import NoResults from "../../components/NoResults";
import ArtistCard from "../../components/ArtistCard";

function Artists() {
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState([]);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(null);

  const searchArtists = async () => {
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
          setTotal(res.data.artists.total);
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
        <SearchBoton handleSearch={searchArtists} />
      </div>
      <div>
        {artists.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-0">
            {artists.map((e, i) => (
              <ArtistCard key={i} item={e} />
            ))}
          </div>
        ) : (
          <NoResults />
        )}
      </div>
    </div>
  );
}

export default Artists;
