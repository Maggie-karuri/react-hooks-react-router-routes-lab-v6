import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    // Fetch directors data
    const fetchDirectors = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT/directors");
        if (!response.ok) {
          throw new Error("Failed to fetch directors data");
        }
        const data = await response.json();
        setDirectors(data);
      } catch (error) {
        console.error("Error fetching directors data:", error);
      }
    };

    fetchDirectors();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {directors.map((director, index) => (
          <div key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

export default Directors;
