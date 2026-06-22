import { Link } from "react-router-dom";


function ProductCard({producto}){


return(


<div className="product-card">



<img

src={producto.imagen}

alt={producto.nombre}

/>




<h2>

{producto.nombre}

</h2>



<p>

{producto.descripcion}

</p>



<h3>

${producto.precio}

</h3>




<Link to={`/producto/${producto.id}`}>


<button>

Ver producto

</button>


</Link>



</div>


)


}


export default ProductCard;