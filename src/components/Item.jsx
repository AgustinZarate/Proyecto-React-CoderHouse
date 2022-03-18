import React from 'react'
import ItemCounter from './ItemCounter'

const Item = ({item}) => {
  return (
    <>
    <div className='container-card'>{/* Para usar grid de bootstrap, colocar el col en Card.jsx y el Row en App.jsx */}
    <div className="container-img-card">
        <img className='pokeball' src={item.imagen} alt="Pokeball" />
    </div>
    <div className="detail-card">
        <h3>{item.nombre}</h3>
        <p>{item.descipsion}</p>
        <p>Stock Actual: {item.stock}</p>
        <div className='price-card'>
            <h4>Price</h4>
            <p>{item.precio}$</p>
        </div>
        <ItemCounter stock={item.stock}/>
            
    </div>
    </div>
    </>
  )
}

export default Item