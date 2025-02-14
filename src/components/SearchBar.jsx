import { useState } from "react";
import { useAppDataContext } from "../contexts/AppDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies, setTvSeries } = useAppDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "def7efef2b820aa33e9b02a6abc5df86",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.error("Errore film:", err));

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "def7efef2b820aa33e9b02a6abc5df86",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => {
        setTvSeries(res.data.results);
      })
      .catch((err) => console.error("Errore serie TV:", err));
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="search"
        placeholder="Cerca film o serie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
