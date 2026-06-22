import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/Productcard";

function Home() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    cargarProductos();

  }, []);

  const cargarProductos = async () => {

    try {

      const res = await api.get("/");

      setProductos(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div>

      <section className="hero">

        <h1>
          Bienvenido a TechNova
        </h1>

        <p>
          Encontrá los mejores productos de tecnología al mejor precio.
        </p>

      </section>

      <div className="products-grid">

        {productos.map(producto => (

          <ProductCard
            key={producto.id}
            producto={producto}
          />

        ))}

      </div>

    </div>

  );

}

export default Home;