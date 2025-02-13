import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <img src="/images/Boolflix.png" alt="Boolflix" className="logo" />
      <SearchBar />
    </header>
  );
}
