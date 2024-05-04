import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    // Fetch actors data
    const fetchActors = async () => {
      try {
        const response = await fetch("YOUR_API_ENDPOINT/actors");
        if (!response.ok) {
          throw new Error("Failed to fetch actors data");
        }
        const data = await response.json();
        setActors(data);
      } catch (error) {
        console.error("Error fetching actors data:", error);
      }
    };

    fetchActors();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {actors.map((actor, index) => (
          <div key={index}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

export default Actors;
