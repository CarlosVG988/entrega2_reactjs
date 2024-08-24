// import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import "./main.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nosotros from "./components/Nosotros"
import { useState } from "react"
import { CartContext } from "./context/CartContext"




function App() {
  

  const [carrito, setCarrito] = useState([]);
  
  const user = "Carlos";
  const edad = 27;



  return (
    <div>
      <CartContext.Provider value = {{carrito,setCarrito}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />

        </Routes>

      </BrowserRouter>
      </CartContext.Provider>
    </div>



  )
}

export default App
