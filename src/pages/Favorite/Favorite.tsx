import React, {FC, useEffect, useState} from 'react';

import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';

import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';
import {BagTitle, DefaultTitle, ProductButton, Wrapper} from './styles';
import Catalog from '../../types/api/catalog';
import API from '../../api';

const Favorite: FC = () => {
  const {cartItems, clearAllCart, favoritesItems} = useShoppingCart();
  const [product, setProduct] = useState<Catalog[]>([]);
  const [checkoutMessage, setCheckoutMessage] = useState<string>('');

  // const getData = async () => {
  //   const getSaleCards = await API.catalog.getCatalog();
  //   if (!getSaleCards) {
  //     return;
  //   }
  //   setProduct(getSaleCards.data);
  // };

  // const checkout = async () => {
  //   const allIds: string[] = [];
  //
  //   cartItems.forEach(item => {
  //     allIds.push(item.id);
  //   });
  //
  //   try {
  //     const getSaleCards = await API.bag.checkoutCart(allIds);
  //
  //     if (getSaleCards.status === 200) {
  //       setCheckoutMessage('Thank you for ordering, your items are on their way');
  //
  //       setTimeout(() => {
  //         localStorage.clear();
  //         clearAllCart();
  //         setCheckoutMessage('');
  //         window.scrollTo(0, 0);
  //       }, 2000);
  //
  //     } else {
  //       setCheckoutMessage('Failed. Please try again later');
  //     }
  //   } catch {
  //     setCheckoutMessage('Failed. Please try again later');
  //   }
  //
  // };

  // useEffect(() => {
  //   getData().catch(console.error);
  // }, []);
  //
  // useEffect(() => {
  //   getData().catch(console.error);
  // }, [favoritesItems]);

  return (
    <Wrapper>
      <BagTitle className="main-page-title">Favorite
        {favoritesItems.length > 0 &&
          <span className="bag-container-title-items"
                style={{position: 'absolute', bottom: 33, left: 320}}>
          {`${favoritesItems.length} items`}
        </span>}
      </BagTitle>

      {favoritesItems.length > 0 ? (
          <>
            {favoritesItems.map(item => (
              <FavoriteItem key={item.id} {...item} />
            ))}
          </>
        ) :
        (
          <>
            <DefaultTitle className="bag-container-text">
              No selected favorites items ..
            </DefaultTitle>
          </>
        )}

    </Wrapper>
  );
};

export default Favorite;