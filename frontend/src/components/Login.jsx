import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Register from "./register";
import { useAuth } from "../context/AuthContext";

function Login({ setIsAuthenticated }) {

  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "rol",
        res.data.rol
      );

      localStorage.setItem(
        "userId",
        res.data.id
      );

      login({

  id: res.data.id,

  username: res.data.username,

  rol: res.data.rol

});

      toast.success(
        "Bienvenido a TechNova"
      );

      setIsAuthenticated(true);

      if (res.data.rol === "admin") {

  window.location.href = "/administracion";

} else {

  window.location.href = "/";

}

    } catch (error) {

      console.error(error);

      toast.error(
        "Usuario o contraseña incorrectos"
      );

    }

  };

  if (showRegister) {

    return (
      <Register
        setShowRegister={setShowRegister}
      />
    );

  }

  return (

    <div className="card">

      <h2>
        Iniciar Sesión
      </h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          name="username"
          placeholder="Usuario"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Ingresar
        </button>

        <button
          type="button"
          onClick={() =>
            setShowRegister(true)
          }
        >
          Crear Usuario
        </button>

      </form>

    </div>

  );

}

export default Login;