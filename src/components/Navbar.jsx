import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Landing</Link>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/series">Series</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;
