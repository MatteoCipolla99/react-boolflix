import { useAppDataContext } from "../contexts/AppDataContext";

export default function Main() {
  const { movies } = useAppDataContext();
  return (
    <main>
      <h2>Lista film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}
