import React from "react";
import './CartWidget.css';
import image from "../../img/cart-widget.png";

const CartWidget = () => {
  return (
    <div className="nav-cartWidget">
      <img className="carrito" id="carrito" src={image} alt="carrito de compras" />
    </div>
  );
};

export default CartWidget;

