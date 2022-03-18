import React from 'react'
import ItemCounter from './ItemCounter'

const Item = ({producto}) => {
  return (
    <>
    <div className='container-card'>{/* Para usar grid de bootstrap, colocar el col en Card.jsx y el Row en App.jsx */}
    <div className="container-img-card">
        <img className='pokeball' src={producto.imagen} alt="Pokeball" />
    </div>
    <div className="detail-card">
        <h3>{producto.nombre}</h3>
        <p>{producto.descipsion}</p>
        <p>Stock Actual: {producto.stock}</p>
        <div className='price-card'>
            <h4>Price</h4>
            <p>{producto.precio}$</p>
        </div>
        <ItemCounter stock={producto.stock}/>
            
    </div>
    </div>
    </>
  )
}

export default Item