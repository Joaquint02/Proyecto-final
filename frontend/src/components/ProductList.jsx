import { useState, useEffect } from "react";
import api from "../services/api";

function ProductList({
  products,
  setProducts,
  setSelectedProduct,
  setSelectedView,
}) {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(false);
  }, [products]);

  const deleteProduct = async (id) => {
    const confirmar = window.confirm(
      "¿Seguro que deseas eliminar este producto?"
    );

    if (!confirmar) return;

    try {
      await api.delete(`/${id}`);

      setProducts(
        products.filter((p) => p.id !== id)
      );

      alert("Producto eliminado");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar");
    }
  };

  const filteredProducts = products.filter((product) =>
    product.nombre
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <div className="card">
      <h2>Lista de Productos</h2>

      <input
        type="text"
        placeholder="🔍 Buscar producto..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-input"
      />

      {filteredProducts.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.descripcion}</td>
                <td>${p.precio}</td>
                <td>{p.stock}</td>

                <td>
                  <button
                    onClick={() =>
                      setSelectedView(p)
                    }
                  >
                    Ver
                  </button>

                  <button
                    onClick={() =>
                      setSelectedProduct(p)
                    }
                  >
                    Editar
                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(p.id)
                    }
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;