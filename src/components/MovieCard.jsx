import { Link } from "react-router-dom"

export default function MovieCard({movie}) {
    return (
        <div className="movie card">
            <div className="card-body">
              <h5 className="">{movie.title}</h5>
              <p className="mt-4 mb-4"><strong>Director</strong> : {movie.director}</p>
              <p className="mt-2 mb-2"><strong>Genre</strong>: {movie.genre}</p>
              <p className="overview mt-3 mb-4"><strong>Description</strong>: {movie.abstract}</p>
              <Link to={`/movies/${movie.id}`} className="btn btn-dark">Scopri di più</Link>
            </div>
        </div>
    )
}