// import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import "./main.css"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"

function App() {
  

  return (
    
      <div>
        <Navbar/>
        <ItemListContainer/>
        <ItemDetailContainer itemId={2}/>
      </div>
      
      
    
    
  )
}

export default App
