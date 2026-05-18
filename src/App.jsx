import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
