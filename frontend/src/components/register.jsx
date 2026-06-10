import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Register({ setShowRegister }) {
  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          password,
        }
      );

      toast.success(
        "Usuario registrado correctamente"
      );

      setShowRegister(false);

    } catch (error) {
      console.error(error);

      toast.error(
        "No se pudo registrar el usuario"
      );
    }
  };

  return (
    <div className="card">
      <h2>Registro</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Registrarse
        </button>

        <button
          type="button"
          onClick={() =>
            setShowRegister(false)
          }
        >
          Volver al Login
        </button>
      </form>
    </div>
  );
}

export default Register;