import React, { useState } from 'react'
import './ItemCounter.css';
import CartWidget from './navBar/cartWidget/CartWidget';

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
    <div className='counter'>
    <button onClick={sumar} className='btn-sumar-producto btn btn-primary mx-2'>+</button>
    <span>{contador}</span>
    <button onClick={restar} className='btn-restar-producto btn btn-danger mx-2'>-</button>
    </div>
    <button className='btn btn-success m-1 d-flex align-items-center'>
      Add Cart <CartWidget />
    </button>

    </>
  )
}

export default ItemCounter