import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
