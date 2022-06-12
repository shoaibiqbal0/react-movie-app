import { useState } from "react";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState({});

  const searchMovie = (event) => {
    if (event.key === "Enter") {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data));
    }
  };

  const apiKey = "4b056b87";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;

  return (
    <div>
      <Search search={search} setSearch={setSearch} searchMovie={searchMovie} />
      <Main movies={movies} />
    </div>
  );
}

export default App;
