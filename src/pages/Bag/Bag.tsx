import React, {FC} from 'react';

import CartItem from '../../components/CartItem/CartItem';

import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';
import {BagTitle, DefaultTitle, Wrapper} from './styles';

const Bag: FC = () => {
  const {cartItems} = useShoppingCart();

  return (
    <Wrapper>
      <BagTitle className="main-page-title">Bag</BagTitle>

      {cartItems.length > 0 ? (cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))) :
        (<DefaultTitle className="bag-container-text">
          No items selected ..
        </DefaultTitle>)}

    </Wrapper>
  );
};

export default Bag;