import { useState } from "react";
import api from "../services/api";

function ProductList({
  products,
  setProducts,
  setSelectedProduct,
}) {

  const [search, setSearch] = useState("");

  const deleteProduct = async (id) => {

    const confirmar = window.confirm(
      "¿Eliminar producto?"
    );

    if (!confirmar) return;

    try {

      await api.delete(`/${id}`);

      const res = await api.get("/");

      setProducts(res.data);

      alert("Producto eliminado");

    } catch (error) {

      console.error(error);

      alert("Error al eliminar");
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.nombre
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
  );

  return (
    <div className="card">

      <h2>
        Lista de Productos
      </h2>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <table>

        <thead>

          <tr>
            <th>Imagen</th>
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

              <td>

                <img
                  src={
                    p.imagen ||
                    "https://via.placeholder.com/80"
                  }
                  alt={p.nombre}
                  width="80"
                />

              </td>

              <td>{p.nombre}</td>

              <td>{p.descripcion}</td>

              <td>${p.precio}</td>

              <td>{p.stock}</td>

              <td>

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

    </div>
  );
}

export default ProductList;