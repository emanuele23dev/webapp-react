import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ReviewForm from "../components/ReviewForm";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";


export default function SingleMovie() {
  const { id } = useParams();
  const { loading, setLoading } = useContext(GlobalContext);
  const [movie, setMovie] = useState(null);

  const handleNewReview = (newReview) => {
    setMovie(prevMovie => ({
      ...prevMovie,
      reviews: [newReview, ...(prevMovie.reviews || [])]
    }));
  };

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/api/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Errore nel caricamento del film:', error);
        setLoading(false);
      });
  }, [id, setLoading]);

  if (loading) return <Loader />;
  if (!movie) return <div>Film non trovato</div>;

  return (
    <>
    {loading && <Loader />}
      <ReviewForm movie_id={id} onReviewAdded={handleNewReview} />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Dettagli Film</h1>
        <div className="card mb-4">
          {movie.image && <img src={movie.image} className="card-img-top" alt={movie.title} />}
          <div className="card-body">
            <h2>{movie.title}</h2>
            <p className="mt-4"><strong>Director</strong> : {movie.director}</p>
            <p><strong>Genre</strong>: {movie.genre}</p>
            <p><strong>Description</strong>: {movie.abstract}</p>
            <p><strong>Release Year</strong>: {movie.release_year}</p>
          </div>
        </div>

        <h3 className="text-center">Recensioni</h3>
        <div className="row mt-2 mb-5 g-4">
          {movie.reviews?.map(review => (
            <div className="col-md-4" key={review.id}>
              <div className="card">
                <div className="card-body">
                  <h5>{review.name}</h5>
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`bi ${i < review.vote ? 'bi-star-fill' : 'bi-star'} rating me-1`}
                      ></i>
                    ))}
                  </div>
                  <p>"{review.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-5">
        <a href="/"><button className="btn btn-dark">Torna alla Home</button></a>
        </div>
      </div>
    </>
  );
}