import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
    <header>
        <nav>
            <NavLink to="/">Movies</NavLink>
        </nav>
    </header>
    <main>
        <Outlet />
    </main>

    <footer>
       Footer
    </footer>
    </>
  )
}
