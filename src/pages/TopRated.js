import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";

function TopRatedMovie() {
  // simpan API KEY dan URL ke variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  //Membuat State movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getTopRatedMovies() {
    const response = await axios(URL);
    //Simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} title=" Top Rated Movies" />
    </>
  );
}
export default TopRatedMovie;
