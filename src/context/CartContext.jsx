import { createContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item, cantidad) => {
      const itemAgregado = { ...item, cantidad };
      // console.log (itemAgregado)
  
      const nuevoCarrito = [...carrito];
      const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
  
  
  
      if (estaEnElCarrito) {
        estaEnElCarrito.cantidad += estaEnElCarrito.cantidad;
  
      } else {
        nuevoCarrito.push(itemAgregado);
  
      }
      setCarrito(nuevoCarrito);
  
  
  
    }
  
    const cantidadEnCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  
    }
  
    const precioTotal = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
  
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }
return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, precioTotal, vaciarCarrito }}>
            {children}
    </CartContext.Provider>
)
}