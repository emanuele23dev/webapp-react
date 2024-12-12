import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import MoviesPage from "./pages/MoviesPage";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="movies/:id" element={<SingleMovie />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
