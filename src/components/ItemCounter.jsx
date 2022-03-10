import React, { useState } from 'react'

const ItemCounter = ({stock}) => {
    const [contador, setContador] = useState(0)
    const sumar = ()=> {
        if(contador < stock)
        setContador(contador + 1)
    }
    const restar = ()=> {
        if (contador > 0){
            setContador(contador - 1)
        }
    }
  return (
    <>
    <button onClick={sumar} className='btn-sumar-producto btn btn-primary mx-2 p-2'>+</button>
    <span>{contador}</span>
    <button onClick={restar} className='btn-restar-producto btn btn-danger mx-2 p-2'>-</button>
    </>
  )
}

export default ItemCounter