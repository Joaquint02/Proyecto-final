import { useState, useEffect } from "react";
import api from "./services/api";

import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Login from "./components/Login";


function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );


  const [products, setProducts] = useState([]);


  const [selectedProduct, setSelectedProduct] = useState(null);


  const [selectedView, setSelectedView] = useState(null);





  const getProducts = async () => {

    try {


      const res = await api.get("/");


      setProducts(res.data);



    } catch(error) {


      console.error(
        "Error cargando productos",
        error
      );


    }

  };






  useEffect(()=>{


    if(isAuthenticated){

      getProducts();

    }


  },[isAuthenticated]);








  if(!isAuthenticated){


    return (

      <Login

      setIsAuthenticated={setIsAuthenticated}

      />

    );


  }








  return (

    <div>


      <header>


        <h1>
          Dashboard Productos
        </h1>


        <button

        onClick={()=>{

          localStorage.removeItem("token");

          setIsAuthenticated(false);

        }}

        >

        Cerrar sesión

        </button>


      </header>







      <ProductForm


      selectedProduct={selectedProduct}


      setSelectedProduct={setSelectedProduct}


      setProducts={setProducts}


      />








      <ProductList


      products={products}


      setProducts={setProducts}


      setSelectedProduct={setSelectedProduct}


      setSelectedView={setSelectedView}


      />









      {
      
      selectedView && (


        <div className="card">


          <h2>
            Detalle del producto
          </h2>



          <img

          src={selectedView.imagen}

          alt={selectedView.nombre}

          className="product-img-big"

          />



          <h3>
            {selectedView.nombre}
          </h3>



          <p>
            {selectedView.descripcion}
          </p>



          <p>
            Precio: ${selectedView.precio}
          </p>



          <p>
            Stock: {selectedView.stock}
          </p>




          <button

          onClick={()=>
            setSelectedView(null)
          }

          >

          Cerrar

          </button>



        </div>


      )

      }




    </div>

  );


}


export default App;