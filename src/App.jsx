// import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import "./main.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nosotros from "./components/Nosotros"


function App() {


  return (
    <div>
    <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/inicio" element={<ItemListContainer />} />
          <Route path="/item" element={<ItemDetailContainer itemId={2} />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      
    </BrowserRouter>
    </div>



  )
}

export default App
