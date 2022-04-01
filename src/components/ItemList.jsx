import React, { useEffect, useState } from 'react'
import Item from './Item'
import {stock} from '../data/stock.jsx'


const ItemList = () => {
  const [listaProductos, setListaProductos] = useState([])
  const [loading, setLoading] = useState(true)

const getProducts = new Promise ((resolve, reject)=> {
  if(stock.length === 0) {
    setTimeout(()=>{
      reject( alert('No funciono'))
    }, 5000)
    
  }else{
    setTimeout(()=>{
      resolve(stock)
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