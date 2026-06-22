import { Link } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";


function Navbar(){


const {carrito}=useCarrito();


const {usuario,logout}=useAuth();



const cantidad = carrito.reduce(

(acc,item)=>acc+item.cantidad,

0

);




return(

<header className="navbar">


<div className="navbar-logo">


<Link to="/">

⚡ TechNova

</Link>


</div>




<nav className="navbar-links">


<Link to="/">

Inicio

</Link>



<Link to="/tienda">

Productos

</Link>



<Link to="/carrito">

🛒 Carrito ({cantidad})

</Link>





{

usuario ?


<>


<Link to="/perfil">

👤 {usuario.username}

</Link>

<Link to="/mis-compras">
  Mis Compras
</Link>



<button

onClick={logout}

>

Salir

</button>


</>


:


<Link to="/login">

Ingresar

</Link>


}





</nav>


</header>


)


}



export default Navbar;