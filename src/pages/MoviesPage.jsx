import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"


export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/movies')
      .then(response => response.json())
      .then(data => setMovies(data.movies))
      .catch(error => console.error('Errore:', error));
  }, []);

  if (!movies.length) return <div className="text-center">Caricamento...</div>;

  return (
   <>
   

    <section className="mb-5 mt-5">
      <h1 className="text-center mb-5 mt-5">React Movies WebApp</h1>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">

        {movies.map(movie => (
            <div className="col" key={movie.id}>
                <MovieCard movie={movie} />
            </div>
        ))}

      </div>
      </div>
    </section>
   </>
  )
}