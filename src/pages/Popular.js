import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";

function PopularMovie() {
  // simpan API KEY dan URL ke variable
  
  //Membuat State movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    //Simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Popular Movies" />
    </>
  );
}
export default PopularMovie;
