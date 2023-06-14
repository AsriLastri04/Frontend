/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  // eslint-disable-next-line no-unused-vars
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, []);

  // mendapatkan 1 data dari trending movie
  async function getTrendingMovies() {
    const response = await axios(ENDPOINTS.HERO);
    return response.data.results[Math.floor(Math.random() * 20)];
  }

  // membuat fungsi untuk mendapatkn detail movie
  async function getDetailMovie() {
    // Ambil id dari trending movie
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    //update data movie dari axios ke state movie
    setMovie(response.data);
  }

  return (
    <StyledHero className="poster">
      <div>
        <section>
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
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.Title}
            ></img>
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
