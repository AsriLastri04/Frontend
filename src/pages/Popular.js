import axios from "axios";
import Movies from "../components/Movies/Movies";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";
import { updateMovie } from "../Features/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function PopularMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line no-undef
    getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    //Simpan data ke state movie
    const movies = response.data.results;
    dispatch(updateMovie(movies));
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" />
    </>
  );
}
export default PopularMovie;
