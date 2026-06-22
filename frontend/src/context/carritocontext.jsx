import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {

  const [carrito, setCarrito] = useState(() => {

    const carritoGuardado =
      localStorage.getItem("carrito");

    return carritoGuardado
      ? JSON.parse(carritoGuardado)
      : [];
  });

  useEffect(() => {

    localStorage.setItem(
      "carrito",
      JSON.stringify(carrito)
    );

  }, [carrito]);

  const agregarProducto = (producto) => {

    const existe = carrito.find(
      (item) => item.id === producto.id
    );

    if (existe) {

      setCarrito(

        carrito.map((item) =>

          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1
              }
            : item

        )

      );

    } else {

      setCarrito([

        ...carrito,

        {
          ...producto,
          cantidad: 1
        }

      ]);

    }

  };

  const eliminarProducto = (id) => {

    setCarrito(

      carrito.filter(
        (item) => item.id !== id
      )

    );

  };

  const aumentarCantidad = (id) => {

    setCarrito(

      carrito.map((item) =>

        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1
            }
          : item

      )

    );

  };

  const disminuirCantidad = (id) => {

    setCarrito(

      carrito.map((item) =>

        item.id === id &&
        item.cantidad > 1
          ? {
              ...item,
              cantidad: item.cantidad - 1
            }
          : item

      )

    );

  };

  const vaciarCarrito = () => {

    setCarrito([]);

    localStorage.removeItem(
      "carrito"
    );

  };

  return (

    <CarritoContext.Provider
      value={{
        carrito,
        agregarProducto,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        vaciarCarrito
      }}
    >

      {children}

    </CarritoContext.Provider>

  );

}

export function useCarrito() {

  return useContext(
    CarritoContext
  );

}