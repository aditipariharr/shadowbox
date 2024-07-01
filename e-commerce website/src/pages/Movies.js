import React from 'react';
import MovieCard from '../components/MovieCard';

function Movies() {
  // Example movie data
  const movies = [
    { id: 1, title: 'Movie 1', poster: 'movie1.jpg' },
    { id: 2, title: 'Movie 2', poster: 'movie2.jpg' },
    { id: 3, title: 'Movie 3', poster: 'movie3.jpg' }
    // Add more movies as needed
  ];

  return (
    <div>
      <h2>Movies</h2>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
