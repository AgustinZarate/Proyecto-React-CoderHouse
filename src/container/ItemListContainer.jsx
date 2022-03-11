import React from 'react'
import ItemList from '../components/ItemList'

const ItemListContainer = ({tutora, card}) => {
  return (
    <div className='text-center'>
        <h2>Hola <b>{tutora}</b> bienvenida <b>FyM Sublimaciones</b> </h2>
        <ItemList card={card}/>
    </div>
  )
}

export default ItemListContainer