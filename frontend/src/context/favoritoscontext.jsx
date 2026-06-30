import { createContext, useContext, useEffect, useState } from "react";

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {

  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  const toggleFavorito = (producto) => {

    const existe = favoritos.find(
      item => item.id === producto.id
    );

    if (existe) {

      setFavoritos(
        favoritos.filter(
          item => item.id !== producto.id
        )
      );

    } else {

      setFavoritos([
        ...favoritos,
        producto
      ]);

    }

  };

  const esFavorito = (id) => {

    return favoritos.some(
      item => item.id === id
    );

  };

  return (

    <FavoritosContext.Provider
      value={{
        favoritos,
        toggleFavorito,
        esFavorito
      }}
    >

      {children}

    </FavoritosContext.Provider>

  );

}

export function useFavoritos() {
  return useContext(FavoritosContext);
}