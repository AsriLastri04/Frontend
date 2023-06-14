import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../ui/Button/Button";
import StyledDetailMovie from "./DetailMovie.styled";
import ENDPOINTS from "../../utils/constants/endpoints";

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0]?.key}`;

  useEffect(() => {
    getDetailMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function getDetailMovie() {
    const response = await axios(ENDPOINTS.DETAIL(id));

    setMovie(response.data);
  }
  return (
    <StyledDetailMovie className="poster">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.Title}
      ></img>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>Genre : {genres}</h3>
        <p>{movie.overview}</p>
        <Button
          as="a"
          href={trailer}
          target="_blank"
          size="sm"
          variant="secondary"
        >
          Watch
        </Button>
      </div>
    </StyledDetailMovie>
  );
}

export default DetailMovie;
