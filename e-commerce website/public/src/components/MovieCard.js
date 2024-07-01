import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        <img src={require(`../assets/${movie.poster}`).default} alt={movie.title} />
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;
