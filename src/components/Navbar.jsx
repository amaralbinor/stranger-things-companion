import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display:"flex",
        gap:"30px",
        alignItems:"center",
        padding:"20px",
        background:"#000"
      }}
    >
      <Link style={{color:"white", textDecoration:"none"}} to="/">Landing</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/home">Home</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/about">About</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/series">Series</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/characters">Characters</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/episodes">Episodes</Link>

      <Link style={{color:"white", textDecoration:"none"}} to="/products">Products</Link>

      <Link
        to="/login"
        style={{
          marginLeft:"auto",
          background:"red",
          padding:"10px 20px",
          borderRadius:"8px",
          color:"white",
          textDecoration:"none",
          fontWeight:"bold",
          boxShadow:"0 0 15px red"
        }}
      >
        Login
      </Link>

    </nav>
  );
}

export default Navbar;