import React, { useEffect, useState } from 'react'
import Item from './Item'
const ItemList = ({listaProductos}) => {
  
  const pokeballs = [
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
  ]

  const [arrayProductos, setArrayProductos ] = useState([])
let getProductos = new Promise ((resolve, reject)=> {
  let condicion = true /* esta tiene que ser la condicion if(){ */
    if (pokeballs.length===0) {
      setTimeout(()=>{reject("No hay pokeballs disponible")}, 3000)
    }else{
      setTimeout(()=>{resolve(pokeballs)}, 3000)
      
  }
})


useEffect(()=>{
  getProductos
  .then((respuesta)=> setArrayProductos(respuesta))
  .catch((error)=>console.log(error))
},[])

  return (
      <div className=''>
        <h3>Lista de productos</h3>
          <div className='d-flex justify-content-center'>
            {listaProductos.map((item)=> <Item item={item} key={item.id} /* nombre={item.nombre} imagen={item.imagen} precio={item.precio} stock={item.stock} descipsion={item.descipsion} */ />)}
          </div>
      </div>

  )
}


export default ItemList