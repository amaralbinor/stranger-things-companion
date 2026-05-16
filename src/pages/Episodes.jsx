import { useEffect, useState } from "react";
import "./Episodes.css";
import cap1 from "../assets/Cap1.jpg";
import cap2 from "../assets/Cap2.jpg";
import cap3 from "../assets/Cap3.jpg";
import episodesData from "../data/episodes";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEpisodes(episodesData);
    }, 1000);
  }, []);

  return (
    <div className="episodes-container">
      <h1>Episodes</h1>

      <div className="episodes-grid">
        {episodes.map((episode) => (
          <div className="episode-card" key={episode.id}>
            <img src={episode.image} alt={episode.title} />

            <div className="episode-info">
              <h2>{episode.title}</h2>

              <h3>{episode.season}</h3>

              <p>{episode.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Episodes;