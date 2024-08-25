// import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import "./main.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nosotros from "./components/Nosotros"
import { useState } from "react"
import { CartContext, CartProvider } from "./context/CartContext"
import Carrito from "./components/Carrito"
import Checkout from "./components/Checkout"




function App() {


  


  return (
    <div>
        <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </BrowserRouter>
        </CartProvider>
    </div>



  )
}

export default App
