import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../components/DetailMovie/DetailMovie";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constants/endpoints";

function Detail() {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATION(id));
    setMovies(response.data.results);
  }
  console.log(movies);
  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendation Movies" />
    </>
  );
}
export default Detail;
