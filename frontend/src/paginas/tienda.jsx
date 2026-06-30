import { useEffect, useMemo, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import "../styles/tienda.css";

function Tienda() {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [orden, setOrden] = useState("ninguno");

  useEffect(() => {

    const cargarProductos = async () => {

      try {

        const res = await api.get("/");

        setProductos(res.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    cargarProductos();

  }, []);

  const productosFiltrados = useMemo(() => {

    let lista = [...productos];

    lista = lista.filter((producto) => {

      const nombre = producto.nombre.toLowerCase();

      const coincideNombre = nombre.includes(
        busqueda.toLowerCase()
      );

      let coincideCategoria = true;

      if (categoria === "Notebooks") {
        coincideCategoria = nombre.includes("notebook");
      }

      if (categoria === "Monitores") {
        coincideCategoria = nombre.includes("monitor");
      }

      if (categoria === "Accesorios") {
        coincideCategoria =
          nombre.includes("mouse") ||
          nombre.includes("teclado") ||
          nombre.includes("auricular");
      }

      return coincideNombre && coincideCategoria;

    });

    switch (orden) {

      case "precioAsc":
        lista.sort((a, b) => a.precio - b.precio);
        break;

      case "precioDesc":
        lista.sort((a, b) => b.precio - a.precio);
        break;

      case "az":
        lista.sort((a, b) =>
          a.nombre.localeCompare(b.nombre)
        );
        break;

      case "za":
        lista.sort((a, b) =>
          b.nombre.localeCompare(a.nombre)
        );
        break;

      default:
        break;

    }

    return lista;

  }, [productos, busqueda, categoria, orden]);

  if (loading) {

    return <h2 className="loading">Cargando productos...</h2>;

  }

  return (

    <div className="tienda">

      <div className="tienda-header">

        <h1>Catálogo TechNova</h1>

        <p>
          {productosFiltrados.length} productos encontrados
        </p>

      </div>

      <div className="filtros">

        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) =>
            setBusqueda(e.target.value)
          }
        />

        <select
          value={orden}
          onChange={(e) =>
            setOrden(e.target.value)
          }
        >

          <option value="ninguno">
            Ordenar
          </option>

          <option value="precioAsc">
            Precio menor
          </option>

          <option value="precioDesc">
            Precio mayor
          </option>

          <option value="az">
            A-Z
          </option>

          <option value="za">
            Z-A
          </option>

        </select>

      </div>

      <div className="categorias">

        {["Todos", "Notebooks", "Monitores", "Accesorios"].map((cat) => (

          <button
            key={cat}
            className={
              categoria === cat ? "activo" : ""
            }
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>

        ))}

      </div>

      <div className="products-grid">

        {productosFiltrados.map((producto) => (

          <ProductCard
            key={producto.id}
            producto={producto}
          />

        ))}

      </div>

      {productosFiltrados.length === 0 && (

        <div className="sin-productos">

          <h2>No encontramos productos</h2>

          <p>
            Probá con otra búsqueda.
          </p>

        </div>

      )}

    </div>

  );

}

export default Tienda;