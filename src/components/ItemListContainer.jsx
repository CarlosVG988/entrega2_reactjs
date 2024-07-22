import {pedirDatos} from "../helpers/pedirDatos"
import { useEffect,useState } from "react"

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
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer