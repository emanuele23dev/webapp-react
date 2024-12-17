import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppLayout from "./Layouts/AppLayout";
import MoviesPage from "./pages/MoviesPage";
import SingleMovie from "./pages/SingleMovie";
import NotFound from "./pages/NotFound";
import GlobalContext from "./contexts/GlobalContext";


function App() {
  const [loading, setLoading] = useState(false);
  const values = { loading, setLoading };

  return (
    <GlobalContext.Provider value={values}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<MoviesPage />} />
            <Route path="movies/:id" element={<SingleMovie />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
