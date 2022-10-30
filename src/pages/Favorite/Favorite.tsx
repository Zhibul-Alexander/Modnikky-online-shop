import React, {FC} from 'react';

import FavoriteItem from '../../components/FavoriteItem/FavoriteItem';
import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

import {BagTitle, DefaultTitle, Wrapper} from './styles';

const Favorite: FC = () => {
  const {favoritesItems} = useShoppingCart();

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