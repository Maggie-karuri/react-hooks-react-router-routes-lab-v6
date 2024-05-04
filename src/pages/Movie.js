import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie data based on id
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:3000/movie/ ${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <header>
        <h1>{movie ? movie.title : "Loading..."}</h1>
      </header>
      <main>
        {movie ? (
          <div>
            <p>Time: {movie.time}</p>
            <div>
              Genres:
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading movie information...</p>
        )}
      </main>
    </>
  );
}

export default Movie;
