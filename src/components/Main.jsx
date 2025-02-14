import { useAppDataContext } from "../contexts/AppDataContext";
import StarRating from "./StarRating";

export default function Main() {
  const { movies, tvSeries } = useAppDataContext();
  const imageBaseUrl = "https://image.tmdb.org/t/p/w342";

  function getFlag(lang) {
    const flagMapping = {
      it: "https://flagcdn.com/w20/it.png",
      en: "https://flagcdn.com/w20/gb.png",
      fr: "https://flagcdn.com/w20/fr.png",
      es: "https://flagcdn.com/w20/es.png",
      de: "https://flagcdn.com/w20/de.png",
      ja: "https://flagcdn.com/w20/jp.png",
      zh: "https://flagcdn.com/w20/cn.png",
    };

    if (flagMapping[lang]) {
      return (
        <img
          className="flag"
          src={flagMapping[lang]}
          alt={`Bandiera ${lang}`}
        />
      );
    }
    return lang;
  }

  return (
    <main>
      <h2>Lista Film</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={`Copertina di ${movie.title}`}
            />
            <div className="card-info">
              <div>Titolo: {movie.title}</div>
              <div>Titolo Originale: {movie.original_title}</div>
              <div>Lingua: {getFlag(movie.original_language)}</div>
              <div>
                Voto: <StarRating vote={movie.vote_average} />
              </div>
              <div>{movie.overview}</div>
            </div>
          </li>
        ))}
      </ul>
      <h2>Lista Serie Tv</h2>
      <ul>
        {tvSeries.map((serie) => (
          <li key={serie.id}>
            <img
              src={`${imageBaseUrl}${serie.poster_path}`}
              alt={`Copertina di ${serie.name}`}
            />
            <div className="card-info">
              <div>Titolo: {serie.name}</div>
              <div>Titolo Originale: {serie.original_name}</div>
              <div>Lingua: {getFlag(serie.original_language)}</div>
              <div>
                Voto: <StarRating vote={serie.vote_average} />
              </div>
              <div>{serie.overview}</div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
