import { pedirDatos } from "../helpers/pedirDatos"
import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const categoria = useParams().categoria;

  console.log(categoria)

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
        } else {
          setProductos(res);
          setTitulo ("Productos")
        }

      })

  }, [categoria])



  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer