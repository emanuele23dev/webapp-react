import { useState } from "react";

export default function ReviewForm({movie_id, onReviewAdded}) {

    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    function handleSubmit(e) {
        e.preventDefault();

        if(name.length < 3 || review.length < 10 || rating === 0) {
            setError("Compila tutti i campi");
            return;
        }

        setError(null);
        const formData = {
            name,
            text: review,
            vote: rating
        }

        fetch(`http://localhost:3001/api/movies/${movie_id}/review`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setSuccess("Recensione inviata con successo");
            onReviewAdded({
                id: Date.now(),
                name: name,
                text: review,
                vote: rating
            });
            setName("");
            setReview("");
            setRating(0);
            
            setTimeout(() => {
                setSuccess(null);
                handleFormToggle();
            }, 3000);
        })
        .catch(err => {
            console.error(err);
            setError("Errore nell'invio della recensione");
        });
    }
        
    function handleFormToggle() {
        document.getElementById("form-card").classList.toggle("d-none");
    }
            


    return (

        <>
           <div className="container">
            <div className="text-center mt-5 mb-5">
            <button onClick={handleFormToggle} className="btn btn-dark">Lascia una recensione</button>
            </div>
          
            <div id="form-card" className="card mt-5 d-none">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label className="text-secondary mb-2" htmlFor="username">Nome</label>
                        <input name="username" id="username" type="text" className="form-control mb-3" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required/>

                        <label className="text-secondary mb-2" htmlFor="review">Recensione</label>
                        <textarea name="review" id="review" className="form-control mb-3" placeholder="Recensione" value={review} onChange={(e) => setReview(e.target.value)} required></textarea>

                        <div className="text-warning">
                            {[1,2,3,4,5].map(n => <i key={n} className={`bi bi-star${n <= rating ? "-fill" : ""} me-1`} onClick={() => setRating(n)} data-rating-value={n}></i> )}
                        </div>
                           
                           <div className="mt-3">
                        <button className="btn btn-dark" type="submit">Invia recensione</button>
                        {error && <span className="text-danger ms-4"> <i className="bi bi-exclamation-triangle-fill"></i> {error}</span>}
                        </div>
                    </form>
                </div>
            </div>
           </div>
           <div className="mt-5 text-center">
           {success && <span className="text-success"> <i className="bi bi-check-circle-fill"></i> {success}</span>}
           </div>
        </>
        

    )
}