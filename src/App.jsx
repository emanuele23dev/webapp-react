import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import FilmsPage from "./pages/FilmsPage";
import SingleMovie from "./pages/SingleMovie";


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<FilmsPage />} />
            <Route path="movies/:id" element={<SingleMovie />} />
            <Route path="*" element={<h1>Movie not found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
