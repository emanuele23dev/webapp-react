export default function Footer() {
  return (
    <footer className="bg-dark py-3 px-3">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg text-center align-items-center">

        <div className="col text-white d-flex align-items-center justify-content-center">
            <a href="/"><img src="../src/assets/react.svg" alt="logo" className="me-3" /></a>
                    <h6 className="text-white">React WebApp</h6>
                </div>

                <div className="col text-white">
                    <h6>Social</h6>
                    <div className="d-flex justify-content-center">
                    <a className="text-decoration-none text-white mx-3" href="#"><i className="bi bi-facebook"></i></a>
                    <a className="text-decoration-none text-white mx-3" href="#"><i className="bi bi-twitter"></i></a>
                    <a className="text-decoration-none text-white mx-3" href="#"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>

                <div className="col text-white">
                    <a className="text-decoration-none text-white" href="#"><h6 className="">Privacy Policy</h6></a>
                </div>
            </div>
        </div>
    </footer>
  )
}
