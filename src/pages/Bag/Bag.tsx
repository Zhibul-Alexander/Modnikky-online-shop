import React, {FC, useEffect, useState} from 'react';

import CartItem from '../../components/CartItem/CartItem';
import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

import API from '../../api';
import Catalog from '../../types/api/catalog';

import {BagItems, BagTitle, DefaultTitle, ProductButton, Wrapper} from './styles';

const Bag: FC = () => {
  const {cartItems, clearAllCart} = useShoppingCart();
  const [product, setProduct] = useState<Catalog[]>([]);
  const [checkoutMessage, setCheckoutMessage] = useState<string>('');

  const getData = async () => {
    const getSaleCards = await API.catalog.getCatalog();
    if (!getSaleCards) {
      return;
    }
    setProduct(getSaleCards.data);
  };

  const checkout = async () => {
    const allIds: string[] = [];

    cartItems.forEach(item => {
      allIds.push(item.id);
    });

    try {
      const getSaleCards = await API.bag.checkoutCart(allIds);

      if (getSaleCards.status === 200) {
        setCheckoutMessage('Thank you for ordering, your items are on their way');

        setTimeout(() => {
          localStorage.clear();
          clearAllCart();
          setCheckoutMessage('');
          window.scrollTo(0, 0);
        }, 2000);

      } else {
        setCheckoutMessage('Failed. Please try again later');
      }
    } catch {
      setCheckoutMessage('Failed. Please try again later');
    }

  };

  useEffect(() => {
    getData().catch(console.error);
  }, [cartItems]);

  useEffect(() => {
    getData().catch(console.error);
  }, []);

  return (
    <Wrapper>
      <BagTitle className="main-page-title">Bag
        {cartItems.length > 0 &&
          <BagItems className="bag-container-title-items">
            {`${cartItems.reduce((total, cartItem) => {
              return total + cartItem.options.quantity;
            }, 0)} items`}
          </BagItems>}
      </BagTitle>

      {cartItems.length > 0 ? (
          <>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
            <p className="bag-container-title" style={{textAlign: 'center', margin: '100px 0 50px 0'}}>
              {`Total: ${cartItems.reduce((total, cartItem) => {
                const item = product.find(i => i.id === cartItem.id)?.price.value;
                return total + (Number(item) * 0.6 / 10 || 0) * cartItem.options.quantity;
              }, 0).toFixed(2)} USD`}
            </p>
            <p style={{textAlign: 'center'}}>
              <ProductButton onClick={checkout} className="product-common-text">Proceed to checkout</ProductButton>
              <span>{checkoutMessage}</span>
            </p>
          </>
        ) :
        (
          <>
            <DefaultTitle className="bag-container-text">
              No selected items ..
            </DefaultTitle>
          </>
        )}

    </Wrapper>
  );
};

export default Bag;