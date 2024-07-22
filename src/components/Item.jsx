

const Item = ({producto}) => { 
  return (
    <div className="producto">
        <img src={producto.imagen} alt="" />
        <div>
            <h4>{producto.precio}</h4>
            <p>Precio:${producto.precio}</p>
            <p>Categoria:{producto.categoria}</p>
            <p>{producto.descripcion}</p>
            <a className="ver-mas" href={"/item/${producto.id}"}>Ver mas</a>
        </div>
        
        </div>
  )
}

export default Item