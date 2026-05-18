import { useState } from "react";
import "./Login.css";

function Login() {

const [correo,setCorreo]=useState("");
const [password,setPassword]=useState("");

const ingresar=(e)=>{

e.preventDefault();

if(correo && password){

alert("Bienvenido a Stranger Things Companion");

}else{

alert("Completa todos los campos");

}

};

return (

<div className="login-page">

<div className="login-card">

<h1>STRANGER THINGS</h1>

<p>Accede a tu experiencia Companion</p>

<form onSubmit={ingresar}>

<input
type="email"
placeholder="Correo electrónico"
value={correo}
onChange={(e)=>setCorreo(e.target.value)}
/>

<input
type="password"
placeholder="Contraseña"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">

Ingresar

</button>

</form>

</div>

</div>

);

}

export default Login;