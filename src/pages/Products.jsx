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
      name: "Stranger Things T-Shirt",
      description:
        "Special edition t-shirt inspired by the Stranger Things universe.",
      price: 25,
      image: StrangerShirt,
    },

    {
      id: 2,
      name: "Demogorgon Figure",
      description:
        "Collectible figure inspired by the Demogorgon from the Upside Down.",
      price: 40,
      image: DemogorgonFigure,
    },

    {
      id: 3,
      name: "Stranger Things Poster",
      description:
        "Collector poster inspired by Hawkins and the Upside Down.",
      price: 20,
      image: StrangerPoster,
    },

    {
      id: 4,
      name: "Hellfire Club Mug",
      description:
        "Themed mug inspired by the legendary Hellfire Club.",
      price: 15,
      image: HellfireMug,
    },
  ]);

  return (
    <main className="products-container">

      <h1>Products</h1>

      <p className="products-intro">
        Explore products inspired by the Stranger Things universe.
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