import React from 'react'
import { productDataType } from '../../ts/Product'

type ProductProps = {
  product: productDataType;
  key: number
}

const ProductItem: React.FC<ProductProps> = ({product}) => {
  const { id, name, description, img, price, amount } = product
  return (
    <li>
      <img src={img} alt={name} />
    </li>
  )
}

export default ProductItem