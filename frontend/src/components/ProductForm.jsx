import { useState, useEffect } from "react";
import { FaSave, FaPlusCircle, FaImage } from "react-icons/fa";
import { toast } from "react-toastify";
import api from "../services/api";
import "../styles/productForm.css";

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

    } else {

      limpiarFormulario();

    }

  }, [selectedProduct]);

  const limpiarFormulario = () => {

    setFormData({
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
      imagen: "",
    });

  };

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

        toast.success("Producto actualizado correctamente");

      } else {

        await api.post(
          "/",
          formData
        );

        toast.success("Producto agregado correctamente");

      }

      const res = await api.get("/");

      setProducts(res.data);

      setSelectedProduct(null);

      limpiarFormulario();

    } catch (error) {

      console.error(error);

      toast.error("No se pudo guardar el producto");

    }

  };

  return (

    <div className="product-form-card">

      <h2>

        {selectedProduct ? (
          <>
            <FaSave />
            Editar Producto
          </>
        ) : (
          <>
            <FaPlusCircle />
            Nuevo Producto
          </>
        )}

      </h2>

      <form
        className="product-form"
        onSubmit={handleSubmit}
      >

        <label>Nombre del producto</label>

        <input
          type="text"
          name="nombre"
          placeholder="Ej: Notebook Lenovo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label>Descripción</label>

        <textarea
          name="descripcion"
          placeholder="Descripción del producto..."
          rows="4"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />

        <div className="row-form">

          <div>

            <label>Precio</label>

            <input
              type="number"
              name="precio"
              placeholder="0"
              value={formData.precio}
              onChange={handleChange}
              required
            />

          </div>

          <div>

            <label>Stock</label>

            <input
              type="number"
              name="stock"
              placeholder="0"
              value={formData.stock}
              onChange={handleChange}
              required
            />

          </div>

        </div>

        <label>

          <FaImage />

          URL de la imagen

        </label>

        <input
          type="text"
          name="imagen"
          placeholder="https://..."
          value={formData.imagen}
          onChange={handleChange}
        />

        <div className="preview-image">

          <img
            src={
              formData.imagen
                ? formData.imagen
                : "https://via.placeholder.com/350x220?text=Vista+Previa"
            }
            alt="Vista previa"
          />

        </div>

        <button
          type="submit"
          className="save-product"
        >

          {selectedProduct ? (
            <>
              <FaSave />
              Actualizar Producto
            </>
          ) : (
            <>
              <FaPlusCircle />
              Guardar Producto
            </>
          )}

        </button>

      </form>

    </div>

  );

}

export default ProductForm;