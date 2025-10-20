import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SongLyrics from "./pages/SongLyrics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/song/:id" element={<SongLyrics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;