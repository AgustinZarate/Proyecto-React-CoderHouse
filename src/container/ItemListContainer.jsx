import React, { useState } from 'react'
import ItemList from '../components/ItemList'

const ItemListContainer = ({tutora}) => {

  
  return (
    <div className='text-center'>
        <h2>Hola <b>{tutora}</b> bienvenida <b>Tienda Pokemon</b> </h2>
        <ItemList />
    </div>
  )
}

export default ItemListContainer