import styles from "./Movies.module.css"; 
import Movie from "../Movie/Movie"; 
import data from "../../utils/constants/data";
import {useState} from "react";
import {nanoid} from "nanoid";

function Movies() { 
  const [movies, setMovies] = useState(data);
  function handleClick(){
    const newFilm = {
      id:nanoid(), 
      title:"jigsaw",
      year:2023, 
      type:"Movie",
      poster:"https://picsum.photos/300/600",
    };
    setMovies([...movies, newFilm]);
  }
  return ( 
    <div className={styles.container}> 
      <section className={styles.movies}> 
        <h2 className={styles.movies__title}>Latest Movies</h2> 
        <div className={styles.movie__container}> 
          {movies.map((movie)=>{
            return <Movie key = {movie.id} movie={movie}/>
          }
          )}
          <button onClick={handleClick}>Tambah Film</button>
        </div> 
      </section> 
    </div> 
  ); 
} 
  
export default Movies;