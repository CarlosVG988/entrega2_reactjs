import {pedirDatos} from "../helpers/pedirDatos"
import { useEffect,useState } from "react"
import ItemList from "./ItemList"
const ItemListContainer = () => {

    const [productos, setProductos]=useState([])
    console.log(productos)

    useEffect(() => {
      pedirDatos()
      .then((res)=>{
        setProductos(res);
      })
    
    }, [])
    


  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer