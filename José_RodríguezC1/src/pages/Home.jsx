
import { useEffect, useState } from "react";
import BotonGeneral from "./../components/BotonGeneral.jsx";

function Home({ cambiarValorBotonLogin, usuarioActual }) {

  // Creamos un estado para guardar la URL temporal de la imagen.
  const [imagenUrl, setImagenUrl] = useState("");

  // useEffect permite ejecutar código cuando cambia la foto del usuario.
  useEffect(() => {

    // Comprobamos que exista un usuario y que tenga una foto de perfil.
    if (!usuarioActual?.fotoPerfil) return;

    // Creamos una URL temporal para poder mostrar la imagen en el navegador.
    const url = URL.createObjectURL(usuarioActual.fotoPerfil);

    // Guardamos la URL creada en el estado imagenUrl.
    setImagenUrl(url);

    // Función de limpieza que se ejecuta cuando cambia la foto
    // o cuando salimos de la pantalla Home.
    return () => {


      // Liberamos la URL temporal para no dejar recursos ocupados.
      URL.revokeObjectURL(url);

    };

  // El efecto se vuelve a ejecutar si cambia la foto de perfil.
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
