function DashboardStats({ products }) {
  const totalProductos = products.length;

  const stockTotal = products.reduce(
    (acc, p) => acc + Number(p.stock),
    0
  );

  const valorInventario = products.reduce(
    (acc, p) => acc + p.precio * p.stock,
    0
  );

  return (
    <div className="stats-container">
      <div className="stat-card">
        <h3>Productos</h3>
        <p>{totalProductos}</p>
      </div>

      <div className="stat-card">
        <h3>Stock Total</h3>
        <p>{stockTotal}</p>
      </div>

      <div className="stat-card">
        <h3>Valor Inventario</h3>
        <p>${valorInventario}</p>
      </div>
    </div>
  );
}

export default DashboardStats;