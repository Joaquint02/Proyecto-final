import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { useCarrito } from "../context/CarritoContext";


function ProductoDetalle(){


const { id } = useParams();


const [producto,setProducto] = useState(null);


// ESTA LINEA FALTABA
const { agregarProducto } = useCarrito();




useEffect(()=>{


const cargarProducto = async()=>{


try{


const res = await api.get(`/${id}`);


setProducto(res.data);



}catch(error){


console.error(error);


}


};



cargarProducto();



},[id]);






if(!producto){


return (

<h2>

Cargando producto...

</h2>

)

}






return(


<div className="detalle-producto">



<div className="detalle-imagen">


<img

src={producto.imagen}

alt={producto.nombre}

/>


</div>





<div className="detalle-info">


<h1>

{producto.nombre}

</h1>



<h3>

${producto.precio}

</h3>



<p>

{producto.descripcion}

</p>




<p>

Stock disponible:

<strong>

{producto.stock}

</strong>

</p>





<button

onClick={()=>agregarProducto(producto)}

>

Agregar al carrito 🛒

</button>





<Link to="/tienda">

Volver a productos

</Link>



</div>



</div>



)



}



export default ProductoDetalle;