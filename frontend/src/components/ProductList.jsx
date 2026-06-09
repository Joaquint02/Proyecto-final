import { useEffect, useState } from "react";
import api from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/");
        setProducts(res.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div>
      <h1>Productos</h1>

      {products.length === 0 ? (
        <p>No hay productos registrados.</p>
      ) : (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.nombre} - ${p.precio}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;