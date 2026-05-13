import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="page fade-in">
      <h1>Home</h1>

      <p>
        Bienvenido a la aplicación Companion. Desde aquí puedes acceder a las
        principales secciones del proyecto.
      </p>

      <section className="cards">
        <article className="card">
          <h2>Characters</h2>
          <p>Conoce a los personajes principales de la serie.</p>
          <Link to="/characters">Ver personajes</Link>
        </article>

        <article className="card">
          <h2>Series</h2>
          <p>Consulta información general sobre Stranger Things.</p>
          <Link to="/series">Ver serie</Link>
        </article>

        <article className="card">
          <h2>Products</h2>
          <p>Explora productos relacionados con la aplicación Companion.</p>
          <Link to="/products">Ver productos</Link>
        </article>

        <article className="card">
          <h2>About</h2>
          <p>Lee más sobre el objetivo y desarrollo de esta aplicación.</p>
          <Link to="/about">Ver información</Link>
        </article>
      </section>
    </main>
  );
}

export default Home;