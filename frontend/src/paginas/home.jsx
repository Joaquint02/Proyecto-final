import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";


function Home(){


const [productos,setProductos] = useState([]);




useEffect(()=>{


const cargarProductos = async()=>{


try{


const res = await api.get("/");


setProductos(res.data.slice(0,3));


}catch(error){


console.error(error);


}


};


cargarProductos();


},[]);






return(


<div className="home">



<section className="hero">


<h1>

TechNova Store ⚡

</h1>



<h2>

Tecnología que impulsa tu futuro

</h2>



<p>

Somos una empresa especializada en notebooks,
accesorios y equipos tecnológicos para estudiantes,
profesionales y empresas.

</p>




<Link to="/tienda">


<button>

Ver productos

</button>


</Link>



</section>







<section className="marca">


<h2>

¿Por qué elegir TechNova?

</h2>



<div className="beneficios">


<div>

<h3>

🚀 Tecnología

</h3>

<p>

Productos modernos y de calidad.

</p>

</div>





<div>

<h3>

🔒 Confianza

</h3>

<p>

Compra segura y atención personalizada.

</p>

</div>





<div>

<h3>

⚡ Innovación

</h3>

<p>

Soluciones adaptadas a tus necesidades.

</p>

</div>



</div>



</section>







<section className="destacados">


<h2>

Productos destacados

</h2>




<div className="products-grid">


{

productos.map(producto=>(


<ProductCard


key={producto.id}

producto={producto}


/>


))


}



</div>



</section>





</div>


)



}



export default Home;
