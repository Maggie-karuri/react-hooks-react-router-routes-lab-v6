import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' }
  ];
  
  return (
    <>
      <header>
        {/* What component should go here? */}
        <h1>Home Page</h1>
        {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
      </header>
      <main>
        {/* Info goes here! */}
      </main>
    </>
  );
};

export default Home;
