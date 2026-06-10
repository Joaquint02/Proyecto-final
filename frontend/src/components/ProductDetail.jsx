function ProductDetail({ product, setSelectedView }) {
  if (!product) return null;

  return (
    <div className="card">
      <h2>Detalle del Producto</h2>

      <p>
        <strong>ID:</strong> {product.id}
      </p>

      <p>
        <strong>Nombre:</strong> {product.nombre}
      </p>

      <p>
        <strong>Descripción:</strong> {product.descripcion}
      </p>

      <p>
        <strong>Precio:</strong> ${product.precio}
      </p>

      <p>
        <strong>Stock:</strong> {product.stock}
      </p>

      <button
        onClick={() => setSelectedView(null)}
      >
        Cerrar
      </button>
    </div>
  );
}

export default ProductDetail;