
import { useState } from "react";
import BotonGeneral from "./../components/BotonGeneral.jsx";
import TextField from "@mui/material/TextField";

function Login({ cambiarValorBotonRegistro, buscarUsuario }) {

  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");

  function iniciarSesion() {

    if (!nombre || !contraseña) {
      alert("Introduce nombre y contraseña");
      return;
    }

    const acceso = buscarUsuario(nombre, contraseña);

    if (!acceso) {
      alert("Usuario o contraseña incorrectos");
    }
  }

return (
  <main className="page login-page">

    <h1>JoseRodriguezC1</h1>

    <img className="you" src="src/assets/you.png" />

    <TextField
      label="Nombre"
      variant="standard"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />

    <TextField
      label="Contraseña"
      type="password"
      variant="standard"
      value={contraseña}
      onChange={(e) => setContraseña(e.target.value)}
    />

    <BotonGeneral
      cambiarValor={iniciarSesion}
      nombre="Iniciar sesión"
    />

    <BotonGeneral
      cambiarValor={cambiarValorBotonRegistro}
      nombre="Registrarse"
    />

  </main>
);
}

export default Login;
