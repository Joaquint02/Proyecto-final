import { useState, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function ProductForm({
  selectedProduct,
  setSelectedProduct,
}) {
  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        nombre: selectedProduct.nombre,
        descripcion: selectedProduct.descripcion,
        precio: selectedProduct.precio,
        stock: selectedProduct.stock,
      });
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedProduct) {
        await api.put(
          `/${selectedProduct.id}`,
          formData
        );

        toast.success(
          "Producto actualizado correctamente"
        );
      } else {
        await api.post("/", formData);

        toast.success(
          "Producto agregado correctamente"
        );
      }

      setFormData({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
      });

      setSelectedProduct(null);

    } catch (error) {
      console.error(error);

      toast.error(
        "Error al guardar producto"
      );
    }
  };

  return (
    <div className="card">
      <h2>
        {selectedProduct
          ? "Editar Producto"
          : "Agregar Producto"}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {selectedProduct
            ? "Actualizar Producto"
            : "Guardar Producto"}
        </button>

        {selectedProduct && (
          <button
            type="button"
            onClick={() => {
              setSelectedProduct(null);

              setFormData({
                nombre: "",
                descripcion: "",
                precio: "",
                stock: "",
              });
            }}
          >
            Cancelar
          </button>
        )}
      </form>
    </div>
  );
}

export default ProductForm;