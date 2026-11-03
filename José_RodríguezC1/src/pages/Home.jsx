
import { useEffect, useState } from "react";
import BotonGeneral from "./../components/BotonGeneral.jsx";

function Home({ cambiarValorBotonLogin, usuarioActual }) {

  const [imagenUrl, setImagenUrl] = useState("");

  useEffect(() => {
    if (!usuarioActual?.fotoPerfil) return;

    const url = URL.createObjectURL(usuarioActual.fotoPerfil);
    setImagenUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [usuarioActual?.fotoPerfil]);

  if (!usuarioActual) {
    return <h1>No hay ningún usuario conectado</h1>;
  }

  return (
    <main className="page home-page">

      <h1>¡Bienvenido, {usuarioActual.nombre}!</h1>

      {imagenUrl && (
        <img
          src={imagenUrl}
          alt="Foto de perfil"
          className="foto-perfil"
        />
      )}

      <p><strong>Nombre:</strong> {usuarioActual.nombre}</p>

      <p><strong>Edad:</strong> {usuarioActual.edad}</p>

      <p><strong>Género:</strong> {usuarioActual.genero}</p>

      <p><strong>Provincia:</strong> {usuarioActual.provincia}</p>

      <BotonGeneral
        cambiarValor={cambiarValorBotonLogin}
        nombre="Cerrar sesión"
      />

    </main>
  );
}

export default Home;
