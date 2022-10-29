import React, {useEffect, useState} from 'react';
import Catalog from '../../types/api/catalog';
import API from '../../api';
import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

type CartItemProps = {
  id: string
  options: {
    quantity: number
    size: string
  }
}

const CartItem = ({id, options: {quantity, size}}: CartItemProps) => {
  const [product, setProduct] = useState<Catalog[]>([]);

  const getData = async () => {
    const getSaleCards = await API.catalog.getCatalog();
    if (!getSaleCards) {
      return;
    }
    filterProduct(getSaleCards.data, id);
  };

  const filterProduct = (catalog: Catalog[], id: string) => {
    let productData: Catalog[] = [];

    catalog.filter((value) => {
      if (value.id === id) {
        productData.push(value);
      }
    });

    setProduct(productData);
  };

  useEffect(() => {
    getData().catch(console.error);
  }, []);

  const {removeFromCart} = useShoppingCart();

  return (
    <div>
      {product.map(({images, id, name, price, color, description}) => (
        <div key={id}>
          <img src={images[0]} style={{width: '100px', height: '250px'}}/>
          <div>{name}</div>
          <div>{price.currency}</div>
          <div>{color.hex}</div>
          <div>{size}</div>
          <div>{description}</div>
          <div>{quantity}</div>
          {/*<button*/}
          {/*  onClick={() => removeFromCart(id)}*/}
          {/*>*/}
          {/*  &times;*/}
          {/*</button>*/}
        </div>
      ))}
    </div>
  );
};

export default CartItem;