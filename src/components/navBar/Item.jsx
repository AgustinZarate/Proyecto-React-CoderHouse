import React from 'react'
import ItemCounter from '../ItemCounter'

const Item = ({card}) => {
  return (
    <>
    <div>{card}</div>
    <ItemCounter stock={10}/>
    </>
  )
}

export default Item