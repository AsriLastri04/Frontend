import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";
import Button from "../ui/Button/Button";

function Movies(props) {
  const { movies, setMovies } = props;
  function handleClick() {
    const movie = {
      id: nanoid(),
      title: "jigsaw",
      year: 2023,
      type: "Movie",
      poster: "https://picsum.photos/300/600",
    };
    setMovies([...movies, movie]);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>
          {" "}
          {props.title || "Latest Movies"}
        </h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
          <Button size="md" onClick={handleClick}>
            Tambah Film
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Movies;
