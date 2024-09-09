import React from 'react'
import "./CartItem.css"

const CartItem = ({img}) => {
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={p} alt="" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-text">
          <b>cart item name</b>
          <div>
              <span>₺150 x</span>
              <span>1</span>
          </div>
        </div>
        <a href="/" className='cart-item-remove'>x</a>
      </div>
    </li>
  );
}

export default CartItem