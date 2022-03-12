import React from 'react'
import Item from './Item'

const ItemList = ({Producto}) => {
  return (
      <div>
        <h3>Lista de productos</h3>
        <Item Producto={Producto}/>
      </div>

  )
}


export default ItemList