import React from 'react'
import { productDataType } from '../../ts/Product'
import "./ProductItem.css"
import Rating from './Rating';
import Card from '../UI/Card';

type ProductProps = {
  product: productDataType;
  key: number
}

const ProductItem: React.FC<ProductProps> = ({product}) => {
  const { name, description, img, price } = product
  return (
    <Card>
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p>{description}</p>
      <div className='product-info'>
        <Rating />
        <span className='price'>{price}</span>
      </div>
      <button className="add-to-cart">Sepete Ekle</button>
    </Card>
  );
}

export default ProductItem