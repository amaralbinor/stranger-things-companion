import { useState } from "react";
import "./Products.css";

import StrangerShirt from "../assets/StrangerShirt.jpg";
import DemogorgonFigure from "../assets/DemogorgonFigure.jpg";
import StrangerPoster from "../assets/StrangerPoster.jpg";
import HellfireMug from "../assets/HellfireMug.jpg";

function Products() {

  const [products] = useState([
    {
      id: 1,
      name: "Camiseta Stranger Things",
      description:
        "Camiseta edición especial inspirada en el universo de Stranger Things.",
      price: 25,
      image: StrangerShirt,
    },

    {
      id: 2,
      name: "Figura Demogorgon",
      description:
        "Figura coleccionable inspirada en el Demogorgon del Mundo del Revés.",
      price: 40,
      image: DemogorgonFigure,
    },

    {
      id: 3,
      name: "Póster Stranger Things",
      description:
        "Póster coleccionable inspirado en Hawkins y el Mundo del Revés.",
      price: 20,
      image: StrangerPoster,
    },

    {
      id: 4,
      name: "Taza Hellfire Club",
      description:
        "Taza temática inspirada en el legendario Hellfire Club.",
      price: 15,
      image: HellfireMug,
    },
  ]);

  return (
    <main className="products-container">

      <h1>Productos</h1>

      <p className="products-intro">
        Explora productos inspirados en el universo de Stranger Things.
      </p>

      <section className="products-grid">

        {products.map((product) => (

          <article
            className="product-card"
            key={product.id}
          >

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="product-info">

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <span>${product.price}</span>

            </div>

          </article>

        ))}

      </section>

    </main>
  );
}

export default Products;
