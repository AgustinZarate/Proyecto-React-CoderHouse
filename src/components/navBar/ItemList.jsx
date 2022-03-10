import React from 'react'
import Item from './Item'

const ItemList = ({card}) => {
  return (
      <div>
        <h3>Lista de productos</h3>
        <Item card={card}/>
      </div>

  )
}

export default ItemList