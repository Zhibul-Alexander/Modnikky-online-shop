import React, {FC} from 'react';

import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

import {BagItems, BagTitle, DefaultTitle, Wrapper} from './styles';

const Favorite: FC = () => {
  const {favoritesItems} = useShoppingCart();

  return (
    <Wrapper>
      <BagTitle className="main-page-title">Favorite
        {favoritesItems.length > 0 &&
          <BagItems className="bag-container-title-items">{`${favoritesItems.length} items`}</BagItems>
        }
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