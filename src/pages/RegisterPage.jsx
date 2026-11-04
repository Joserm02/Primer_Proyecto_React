
import { useState } from "react";
import BotonGeneral from "./../components/BotonGeneral.jsx";

import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox
} from "@mui/material";

function RegisterPage({ cambiarValorBotonLogin, registrarUsuario }) {

  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contraseña1, setContraseña1] = useState("");
  const [edad, setEdad] = useState("");
  const [genero, setGenero] = useState("");
  const [provincia, setProvincia] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  function nombreGuardado1() {

  
    if (
      !nombre ||
      !contraseña ||
      !contraseña1 ||
      !edad ||
      !genero ||
      !provincia ||
      !fotoPerfil ||
      !aceptaTerminos
    ) {
      alert("Debes completar todos los campos y aceptar los términos.");
      return;
    }

   
    if (contraseña !== contraseña1) {
      alert("Las contraseñas no coinciden");
      return;
    }

   
    let person = {
      nombre: nombre,
      contraseña: contraseña,
      edad: edad,
      genero: genero,
      provincia: provincia,
      fotoPerfil: fotoPerfil,
    };

    registrarUsuario(person);

    alert("Usuario registrado correctamente");

    cambiarValorBotonLogin();
  }

  return (
    <main className="page register-page">

      <h1>Crear una cuenta</h1>

      <p className="register-subtitle">
        Introduce tus datos para registrarte
      </p>

      <section className="register-form">

        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <TextField
          label="Contraseña"
          type="password"
          variant="outlined"
          fullWidth
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />

        <TextField
          label="Repite contraseña"
          type="password"
          variant="outlined"
          fullWidth
          value={contraseña1}
          onChange={(e) => setContraseña1(e.target.value)}
        />

        <TextField
          label="Edad"
          type="number"
          variant="outlined"
          fullWidth
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

   
        <div className="genero">

          <FormControl>
            <FormLabel>Selecciona tu género</FormLabel>

            <RadioGroup
              row
              name="genero"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Mujer"
              />

              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Hombre"
              />

              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Otro"
              />
            </RadioGroup>
          </FormControl>

        </div>

     
        <FormControl fullWidth>
          <InputLabel id="provincia-label">
            Provincia de Andalucía
          </InputLabel>

          <Select
            labelId="provincia-label"
            value={provincia}
            label="Provincia de Andalucía"
            onChange={(e) => setProvincia(e.target.value)}
          >
            <MenuItem value="Almería">Almería</MenuItem>
            <MenuItem value="Cádiz">Cádiz</MenuItem>
            <MenuItem value="Córdoba">Córdoba</MenuItem>
            <MenuItem value="Granada">Granada</MenuItem>
            <MenuItem value="Huelva">Huelva</MenuItem>
            <MenuItem value="Jaén">Jaén</MenuItem>
            <MenuItem value="Málaga">Málaga</MenuItem>
            <MenuItem value="Sevilla">Sevilla</MenuItem>
          </Select>
        </FormControl>

        <Button
          component="label"
          variant="outlined"
          fullWidth
        >


          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => setFotoPerfil(e.target.files[0] || null)}
          />
        </Button>

        {fotoPerfil && (
          <p>Foto seleccionada: {fotoPerfil.name}</p>
        )}

   
        <FormControlLabel
          control={
            <Checkbox
              checked={aceptaTerminos}
              onChange={(e) => setAceptaTerminos(e.target.checked)}
            />
          }
          label="Acepto términos y condiciones"
        />

      </section>

  
      <div className="register-buttons">

        <BotonGeneral
          cambiarValor={nombreGuardado1}
          nombre="Crear cuenta"
        />

        <BotonGeneral
          cambiarValor={cambiarValorBotonLogin}
          nombre="Volver al Login"
        />

      </div>

    </main>
  );
}

export default RegisterPage;
