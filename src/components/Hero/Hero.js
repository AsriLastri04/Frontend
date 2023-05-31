import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);

    const data = await response.json();
    setMovie(data);
  }
  useEffect(() => {
    fetchMovie();
  }, []);

  console.log(movie);

  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>{movie.Title}</h2>
            <h3>Genre: {movie.Genre}</h3>
            <p>{movie.Plot}</p>
            <Button size="sm" variant="secondary">
              {" "}
              Watch{" "}
            </Button>
          </div>
          <div>
            <img src={movie.Poster} alt={movie.Title}></img>
          </div>
        </section>
      </div>
    </StyledHero>
  );
}
export default Hero;
