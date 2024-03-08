import Body from "./components/Body";
import Header from "./components/Header";
import { useState } from "react";
function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <Header onSearchInputChange={handleSearchInputChange} />
      <Body searchInput={searchInput} />
    </>
  );
}

export default App;
