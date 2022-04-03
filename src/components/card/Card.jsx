import React from 'react'
import './Card.css';
import ItemCounter from '../itemCounter/ItemCounter'
const Card = ({nombre, imagen, precio, stock, descipsion}) => {
  return (
    <>
    <div className='container-card'>{/* Para usar grid de bootstrap, colocar el col en Card.jsx y el Row en App.jsx */}
    <div className="container-img-card">
        <img className='pokeball' src={imagen} alt="Pokeball" />
    </div>
    <div className="detail-card">
        <h3>{nombre}</h3>
        <p>{descipsion}</p>
        <p>Stock Actual: {stock}</p>
        <div className='price-card'>
            <h4>Price</h4>
            <p>{precio}$</p>
        </div>
        <ItemCounter stock={stock}/>
            
    </div>
    </div>
    </>
  )
}

export default Card