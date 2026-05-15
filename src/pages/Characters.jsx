import "./Characters.css";
import eleven from "../assets/Eleven.png";
import mike from "../assets/Mike.png";
import dustin from "../assets/Dustin.jpg";

function Characters() {
  const characters = [
    {
      name: "Eleven",
      description: "Una joven con habilidades extraordinarias y un gran corazón. Valiente, misteriosa y dispuesta a proteger a sus amigos a cualquier costo.",
      image: eleven,
    },
    {
      name: "Mike Wheeler",
      description: "Líder del grupo y el más leal de todos. Inteligente, decidido y siempre listo para enfrentar cualquier aventura junto a sus amigos.el grupo de amigos.",
      image: mike,
    },
    {
      name: "Dustin Henderson",
      description: "Divertido y carismático del equipo. Ingenioso, curioso y experto en encontrar soluciones incluso en los momentos más difíciles.",
      image: dustin,
    },
  ];

  return (
    <div className="characters-container">
      <h1>Characters</h1>

      <div className="characters-grid">
        {characters.map((character, index) => (
          <div className="character-card" key={index}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;