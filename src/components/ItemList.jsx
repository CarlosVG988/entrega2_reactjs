import Item from "./Item"

const ItemList = ({productos}) => {
    console.log(productos)

  return (
    <div>
        <h2>Productos</h2>

        <div className="productos"></div>
            {productos.map((prod)=> <Item producto = {prod} key = {prod.id}/>)}
    </div>
  )
}

export default ItemList