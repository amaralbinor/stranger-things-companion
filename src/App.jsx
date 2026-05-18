import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Series from "./pages/Series";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </>
  );
}

export default App;