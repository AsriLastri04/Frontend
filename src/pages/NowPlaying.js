import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";

function NowPlayingMovie() {
  
  //Membuat State movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    //Simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Now Playing Movies" />
    </>
  );
}
export default NowPlayingMovie;
