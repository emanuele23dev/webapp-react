import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-dark py-3 px-3">
        <nav className="container">
          <a href="/"><img src="../src/assets/react.svg" alt="logo" className="logo me-3" /></a>
            <NavLink to="/" className="text-white text-decoration-none">React Movies</NavLink>
        </nav>
    </header>
  )
}
