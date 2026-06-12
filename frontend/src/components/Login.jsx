import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Register from "./Register";


function Login({ setIsAuthenticated }) {


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
          password,
        }

      );





      localStorage.setItem(
        "token",
        res.data.token
      );



      localStorage.setItem(
        "username",
        res.data.username
      );





      toast.success(
        `Bienvenido ${res.data.username}`
      );



      setIsAuthenticated(true);




    } catch(error){


      console.error(
        error
      );



      toast.error(
        "Usuario o contraseña incorrectos"
      );


    }


  };








  if(showRegister){


    return (

      <Register

      setShowRegister={
        setShowRegister
      }

      />


    );


  }







  return (


    <div className="login-container">


      <div className="card login-card">



        <h2>
          Iniciar Sesión
        </h2>




        <p>
          Acceso al sistema administrativo
        </p>





        <form onSubmit={handleLogin}>


          <input

          type="text"

          placeholder="Usuario"

          value={username}

          onChange={(e)=>
            setUsername(e.target.value)
          }

          required

          />






          <input

          type="password"

          placeholder="Contraseña"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

          required

          />







          <button type="submit">

            Ingresar

          </button>







          <button

          type="button"

          onClick={()=>
            setShowRegister(true)
          }

          >

            Crear Usuario

          </button>





        </form>



      </div>


    </div>


  );


}



export default Login;