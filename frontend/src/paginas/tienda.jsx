import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/Productcard";


function Tienda(){


const [productos,setProductos] = useState([]);

const [busqueda,setBusqueda] = useState("");

const [categoria,setCategoria] = useState("Todos");

const [loading,setLoading] = useState(true);





useEffect(()=>{


const cargarProductos = async()=>{


try{


const res = await api.get("/");


setProductos(res.data);



}catch(error){


console.error(error);


}


finally{


setLoading(false);


}


};



cargarProductos();



},[]);






const productosFiltrados = productos.filter((producto)=>{


const coincideNombre = producto.nombre

.toLowerCase()

.includes(

busqueda.toLowerCase()

);





let coincideCategoria = true;





if(categoria==="Notebooks"){


coincideCategoria = producto.nombre

.toLowerCase()

.includes("notebook");


}




if(categoria==="Monitores"){


coincideCategoria = producto.nombre

.toLowerCase()

.includes("monitor");


}




if(categoria==="Accesorios"){


coincideCategoria = 

producto.nombre

.toLowerCase()

.includes("mouse")

||

producto.nombre

.toLowerCase()

.includes("teclado");



}




return coincideNombre && coincideCategoria;



});







if(loading){


return <h2>Cargando productos...</h2>


}






return(


<div className="tienda">


<h1>

Catálogo TechNova ⚡

</h1>





<input


className="buscador"


type="text"


placeholder="Buscar producto..."


value={busqueda}


onChange={(e)=>

setBusqueda(e.target.value)

}


/>







<div className="categorias">


<button

onClick={()=>setCategoria("Todos")}

>

Todos

</button>




<button

onClick={()=>setCategoria("Notebooks")}

>

💻 Notebooks

</button>




<button

onClick={()=>setCategoria("Monitores")}

>

🖥 Monitores

</button>




<button

onClick={()=>setCategoria("Accesorios")}

>

🖱 Accesorios

</button>


</div>








<div className="products-grid">


{


productosFiltrados.map(producto=>(


<ProductCard


key={producto.id}


producto={producto}


/>


))


}



</div>







{

productosFiltrados.length===0 &&


<h2>

No hay productos encontrados

</h2>


}



</div>



)



}



export default Tienda;