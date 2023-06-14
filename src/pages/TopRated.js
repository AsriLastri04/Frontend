import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";

function TopRatedMovie() {
  //Membuat State movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOP_RATED);
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
