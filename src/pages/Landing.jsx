import { Link } from "react-router-dom";

function Landing() {
  return (
    <main className="hero fade-in">
      <h1>Stranger Things Companion</h1>

      <p>
        Explora el universo de Stranger Things en una aplicación web Companion
        desarrollada con React, rutas dinámicas y una API simulada.
      </p>

      <Link className="btn" to="/home">
        Entrar a la aplicación
      </Link>
    </main>
  );
}

export default Landing;