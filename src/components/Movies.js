import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesToShow = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesToShow}
    </div>
  )
}

export default Movies;
