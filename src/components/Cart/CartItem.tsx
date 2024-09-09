import React from 'react'
import "./CartItem.css"
import { productDataType } from '../../ts/Product';

type CartItemProps = {
  key: number;
  product: productDataType;
}

const CartItem : React.FC<CartItemProps> = ({product}) => {
  return (
    <li className="cart-item">
      <div className="cart-item-img">
        <img src={product.img} alt={product.name} />
      </div> 
      <div className="cart-item-info">
        <div className="cart-item-text">
          <b>{product.name}</b>
          <div>
              <span>₺{product.price} x</span>
              <span>{product.amount}</span>
          </div>
        </div>
        
        <a href="/" className='cart-item-remove'>x</a>
      </div>
    </li>
  );
}

export default CartItem