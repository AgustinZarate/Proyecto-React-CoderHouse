import React, { useEffect, useState } from 'react'
import Item from './Item'
const ItemList = () => {
  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const pokeballs = [
    {
      "id": 1,
      "nombre": "Pokeball",
      "imagen": "img/pokeball.png",
      "precio": 100,
      "stock": 15,
      "descipsion": "Es la básica, puedes coger a cualquier Pokémon."
    },
    {
      "id": 2,
      "nombre": "Superball",
      "imagen": "img/superball.png",
      "precio": 250,
      "stock": 10,
      "descipsion": "Tendrás más posibilidades de atraparlos que con la simple Poké Ball."
    },
    {
      "id": 3,
      "nombre": "Ultraball",
      "imagen": "img/ultraball.png",
      "precio": 500,
      "stock": 5,
      "descipsion": "Tendrás más posibilidades de atraparlos que con la Superball."
    }
  ]



const getProducts = new Promise ((resolve, reject)=> {
  if(pokeballs.length === 0) {
    setTimeout(()=>{
      reject( alert('No funciono'))
    }, 5000)
    
  }else{
    setTimeout(()=>{
      resolve(pokeballs)
    }, 5000)
  }
})

useEffect(()=>{
  getProducts
  .then((respuesta)=> setListaProductos(respuesta))
  .catch((error)=> console.log(error))
  .finally(()=>setLoading(false))
},[])

console.log('Respuesta', listaProductos)

  return (
      <div>
        <h3>Lista de productos</h3>
          <div className='d-flex justify-content-center'>
            {loading ? <p>Cargando..</p> : listaProductos.map((producto) => <Item producto={producto} key={producto.id} />)}
          </div>
      </div>

  )
}


export default ItemList