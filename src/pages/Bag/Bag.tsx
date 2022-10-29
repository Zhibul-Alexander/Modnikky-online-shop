import React, {FC} from 'react';

import CartItem from '../../components/CartItem/CartItem';

import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

const Bag: FC = () => {
  const {cartItems} = useShoppingCart();

  return (
    <div>
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Bag;