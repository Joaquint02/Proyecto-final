import { useCarrito } from "../context/CarritoContext";
import { Link } from "react-router-dom";



function Carrito(){


const {

carrito,

eliminarProducto,

aumentarCantidad,

disminuirCantidad

}=useCarrito();





const total = carrito.reduce(

(acc,producto)=>

acc + producto.precio * producto.cantidad,

0

);





return(


<div>


<h1>

🛒 Mi carrito

</h1>





{

carrito.length === 0 ?


<h2>

Carrito vacío

</h2>



:


<>



{

carrito.map(producto=>(


<div key={producto.id}>


<img
  src={producto.imagen}
  alt={producto.nombre}
  className="carrito-img"
/>



<h2>

{producto.nombre}

</h2>



<p>

${producto.precio}

</p>




<button

onClick={()=>disminuirCantidad(producto.id)}

>

-

</button>




<span>

{producto.cantidad}

</span>




<button

onClick={()=>aumentarCantidad(producto.id)}

>

+

</button>




<button

onClick={()=>eliminarProducto(producto.id)}

>

Eliminar

</button>



</div>



))

}





<h2>

Total: ${total}

</h2>





<Link to="/checkout">


<button>

Finalizar compra

</button>


</Link>



</>



}



</div>


)


}


export default Carrito;