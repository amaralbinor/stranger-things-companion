import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
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
        <Route path="/Series" element={<Series />} />

      </Routes>
    </>
  );
}

export default App;
