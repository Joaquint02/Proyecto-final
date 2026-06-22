import { useState, useEffect } from "react";
import api from "../services/api";

function ProductForm({
  selectedProduct,
  setSelectedProduct,
  setProducts,
}) {

  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagen: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        nombre: selectedProduct.nombre || "",
        descripcion: selectedProduct.descripcion || "",
        precio: selectedProduct.precio || "",
        stock: selectedProduct.stock || "",
        imagen: selectedProduct.imagen || "",
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

        alert("Producto actualizado correctamente");

      } else {

        await api.post(
          "/",
          formData
        );

        alert("Producto agregado correctamente");
      }

      const res = await api.get("/");

      setProducts(res.data);

      setSelectedProduct(null);

      setFormData({
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        imagen: "",
      });

    } catch (error) {

      console.error(error);

      alert("Error al guardar producto");
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

        <input
          type="text"
          name="imagen"
          placeholder="URL de Imagen"
          value={formData.imagen}
          onChange={handleChange}
        />

        <button type="submit">

          {selectedProduct
            ? "Actualizar Producto"
            : "Guardar Producto"}

        </button>

      </form>

    </div>
  );
}

export default ProductForm;