
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import "./App.css";

function App() {
  const [valorBoton, setValorBoton] = useState("login");


  const [listadeUsuarios, setListaUsuario] = useState([]);


  const [usuarioActual, setUsuarioActual] = useState(null);


  function registrarUsuario(nuevoUsuario) {
    setListaUsuario((usuarios) => [...usuarios, nuevoUsuario]);
  }

  function buscarUsuario(nombre, contraseña) {

    const usuarioEncontrado = listadeUsuarios.find(
      (user) =>
        user.nombre === nombre &&
        user.contraseña === contraseña
    );

    if (usuarioEncontrado) {
      setUsuarioActual(usuarioEncontrado);
      setValorBoton("home");
      return true;
    }

    return false;
  }

  function cambiarValorBotonRegistro() {
    setValorBoton("register");
  }

  function cambiarValorBotonLogin() {
    setValorBoton("login");
  }


  if (valorBoton === "register") {
    return (
      <RegisterPage
        cambiarValorBotonLogin={cambiarValorBotonLogin}
        registrarUsuario={registrarUsuario}
      />
    );
  }

  if (valorBoton === "home") {
    return (
      <Home
        cambiarValorBotonLogin={cambiarValorBotonLogin}
        usuarioActual={usuarioActual}
      />
    );
  }


  return (
    <Login
      cambiarValorBotonRegistro={cambiarValorBotonRegistro}
      buscarUsuario={buscarUsuario}
    />
  );
}

export default App;
