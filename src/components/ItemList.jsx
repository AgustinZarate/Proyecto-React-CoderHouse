import React from 'react'
import Item from './Item'

const ItemList = ({Producto, listaProductos}) => {
  return (
      <div className=''>
        <h3>Lista de productos</h3>
          <div className='d-flex justify-content-center'>
            {listaProductos.map((item)=> <Item Producto={Producto} nombre={item.nombre} imagen={item.imagen} precio={item.precio} stock={item.stock} descipsion={item.descipsion} />)}
          </div>
      </div>

  )
}


export default ItemList