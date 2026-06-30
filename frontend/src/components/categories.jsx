import {
  FaLaptop,
  FaKeyboard,
  FaHeadphones,
  FaDesktop,
} from "react-icons/fa";

import "../styles/categories.css";

function Categories() {

  const categorias = [

    {
      nombre:"Notebooks",
      icono:<FaLaptop/>
    },

    {
      nombre:"Monitores",
      icono:<FaDesktop/>
    },

    {
      nombre:"Teclados",
      icono:<FaKeyboard/>
    },

    {
      nombre:"Auriculares",
      icono:<FaHeadphones/>
    }

  ];

  return(

<section className="categories">

<h2>

Explorá nuestras categorías

</h2>

<div className="categories-grid">

{

categorias.map((categoria,index)=>(

<div
key={index}
className="category-card"
>

<div className="category-icon">

{categoria.icono}

</div>

<h3>

{categoria.nombre}

</h3>

</div>

))

}

</div>

</section>

)

}

export default Categories;