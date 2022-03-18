import React, { useState } from 'react'
import ItemList from '../components/ItemList'

const ItemListContainer = ({tutora}) => {

  const[pokeballs, setPokeballs] = useState( [
    {
      "nombre": "Pokeball",
      "imagen": "img/pokeball.png",
      "precio": 100,
      "stock": 15,
      "descipsion": "Es la básica, puedes coger a cualquier Pokémon."
    },
    {
      "nombre": "Superball",
      "imagen": "img/superball.png",
      "precio": 250,
      "stock": 10,
      "descipsion": "Tendrás más posibilidades de atraparlos que con la simple Poké Ball."
    },
    {
      "nombre": "Ultraball",
      "imagen": "img/ultraball.png",
      "precio": 500,
      "stock": 5,
      "descipsion": "Tendrás más posibilidades de atraparlos que con la Superball."
    }
  ])
  return (
    <div className='text-center'>
        <h2>Hola <b>{tutora}</b> bienvenida <b>Tienda Pokemon</b> </h2>
        <ItemList listaProductos={pokeballs}/>
    </div>
  )
}

export default ItemListContainer