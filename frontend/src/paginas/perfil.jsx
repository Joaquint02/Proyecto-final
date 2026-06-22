import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


function Perfil(){


const {usuario, logout}=useAuth();




if(!usuario){


return(


<div className="perfil-container">


<h2>

No hay sesión iniciada

</h2>



<Link to="/login">

Iniciar sesión

</Link>


</div>


)


}





return(


<div className="perfil-container">



<div className="perfil-card">



<h1>

👤 Mi Perfil

</h1>



<h2>

Bienvenido {usuario.username}

</h2>



<p>

Rol:

<strong>

{usuario.rol}

</strong>

</p>





<p>

Cuenta activa en TechNova Store ⚡

</p>





<button

onClick={logout}

>

Cerrar sesión

</button>



</div>



</div>


)


}



export default Perfil;