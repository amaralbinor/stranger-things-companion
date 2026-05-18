import "./Series.css";

import temporada1 from "../assets/temporadas/temporada1.webp";
import temporada2 from "../assets/temporadas/temporada2.jpg";
import temporada3 from "../assets/temporadas/temporada3.jpg.avif";
import temporada4 from "../assets/temporadas/temporada4.webp";
import temporada5 from "../assets/temporadas/temporada5.webp";

function Series() {

const temporadas=[

{
id:1,
titulo:"Temporada 1",
imagen:temporada1,
descripcion:"Once aparece y el misterio de Will comienza en Hawkins."
},

{
id:2,
titulo:"Temporada 2",
imagen:temporada2,
descripcion:"El Upside Down sigue creciendo y nuevas amenazas aparecen."
},

{
id:3,
titulo:"Temporada 3",
imagen:temporada3,
descripcion:"Starcourt Mall cambia Hawkins mientras algo oscuro despierta."
},

{
id:4,
titulo:"Temporada 4",
imagen:temporada4,
descripcion:"Vecna aparece y cambia el destino de Hawkins."
},

{
id:5,
titulo:"Temporada 5",
imagen:temporada5,
descripcion:"La batalla final por Hawkins está por comenzar."
}

];

return(

<div className="series-container">

<h1 className="series-title">
SEASONS
</h1>

<div className="cards-container">

{temporadas.map((temporada)=>(

<div className="card" key={temporada.id}>

<img
src={temporada.imagen}
alt={temporada.titulo}
/>

<div className="card-content">

<h2>{temporada.titulo}</h2>

<p>{temporada.descripcion}</p>

</div>

</div>

))}

</div>

</div>

)

}

export default Series;