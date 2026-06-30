import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import BannerSale from "../components/BannerSale";
import Brands from "../components/Brands";
import Newsletter from "../components/Newsletter";

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



<Hero />


<Features />

<Categories/>

<BannerSale />

<Brands />

<Newsletter />




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
