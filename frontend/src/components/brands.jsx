import "../styles/brands.css";

function Brands() {

  const marcas = [
    "ASUS",
    "HP",
    "Lenovo",
    "Logitech",
    "Samsung",
    "MSI"
  ];

  return (

    <section className="brands">

      <h2>Nuestras Marcas</h2>

      <p>
        Trabajamos con fabricantes reconocidos a nivel mundial.
      </p>

      <div className="brands-grid">

        {marcas.map((marca) => (

          <div
            key={marca}
            className="brand-card"
          >
            {marca}
          </div>

        ))}

      </div>

    </section>

  );

}

export default Brands;