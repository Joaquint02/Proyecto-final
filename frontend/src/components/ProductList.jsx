import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaSearch,
  FaBoxes,
} from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/productList.css";

function ProductList({
  products = [],
  setProducts,
  setSelectedProduct,
}) {

  const [search, setSearch] = useState("");

  const deleteProduct = async (id) => {

    const confirmar = window.confirm(
      "¿Deseas eliminar este producto?"
    );

    if (!confirmar) return;

    try {

      await api.delete(`/${id}`);

      const res = await api.get("/");

      setProducts(res.data);

      toast.success("Producto eliminado");

    } catch (error) {

      console.error(error);

      toast.error("No se pudo eliminar");

    }

  };

  const filteredProducts = products.filter((producto) =>
    producto.nombre
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (

    <div className="product-list">

      <div className="product-list-header">

        <h2>

          <FaBoxes />

          Productos

        </h2>

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

      </div>

      <div className="table-responsive">

        <table className="product-table-admin">

          <thead>

            <tr>

              <th>Imagen</th>

              <th>Nombre</th>

              <th>Precio</th>

              <th>Stock</th>

              <th>Acciones</th>

            </tr>

          </thead>

          <tbody>

            {filteredProducts.length > 0 ? (

              filteredProducts.map((producto) => (

                <tr key={producto.id}>

                  <td>

                    <img
                      src={
                        producto.imagen ||
                        "https://via.placeholder.com/80"
                      }
                      alt={producto.nombre}
                    />

                  </td>

                  <td>

                    <strong>

                      {producto.nombre}

                    </strong>

                  </td>

                  <td>

                    <span className="price">

                      ${producto.precio}

                    </span>

                  </td>

                  <td>

                    {producto.stock > 10 ? (

                      <span className="stock ok">

                        En stock

                      </span>

                    ) : producto.stock > 0 ? (

                      <span className="stock low">

                        Poco stock

                      </span>

                    ) : (

                      <span className="stock out">

                        Sin stock

                      </span>

                    )}

                  </td>

                  <td className="acciones">

                    <button
                      className="btn-edit"
                      onClick={() =>
                        setSelectedProduct(producto)
                      }
                    >

                      <FaEdit />

                    </button>

                    <button
                      className="btn-delete"
                      onClick={() =>
                        deleteProduct(producto.id)
                      }
                    >

                      <FaTrash />

                    </button>

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="5"
                  className="empty"

                >

                  No hay productos.

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default ProductList;