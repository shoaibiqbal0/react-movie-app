import { useState } from "react";
import Main from "./components/Main";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");

  const apiKey = "4b056b87";
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <Main />
    </div>
  );
}

export default App;
