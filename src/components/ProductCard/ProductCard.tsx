import React, {useState} from 'react';

import CIcon from '@coreui/icons-react';
import {cilHeart} from '@coreui/icons';

import {
  CardImg,
  CardLink,
  CardPrice,
  CardPriceContainer,
  CardSalePrice,
  LikeButton,
  LikeIcon,
  WrapperCard,
} from './styles';
import {useNavigate} from 'react-router-dom';
import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

interface IPrice {
  currency: string;
  value: string;
}

interface ISaleCard {
  images: string;
  price: IPrice;
  id: string;
  visibleCardPrice?: boolean;
}


const ProductCard = ({images, price, id, visibleCardPrice = true}: ISaleCard) => {
  const [likeItem, setLikeItem] = useState<boolean>(false);

  const {
    clickFavoriteItem,
  } = useShoppingCart();

  return (
    <WrapperCard key={id}>
      <CardLink to={`/product/${id}`}>
        <CardImg src={images}/>
      </CardLink>
      <CardPriceContainer>
        {visibleCardPrice ?
          <>
            <CardSalePrice>
              {`${Number(price.value) * 0.6 / 10} ${price.currency}`}
            </CardSalePrice>
          </> :
          <>
            <CardPrice>{`${Number(price.value) / 10} ${price.currency}`}</CardPrice>
            <CardSalePrice className="card-sale-price">
              {`${Number(price.value) * 0.6 / 10} ${price.currency}`}
            </CardSalePrice>
          </>
        }
      </CardPriceContainer>
      <LikeButton
        onClick={() => {
          clickFavoriteItem(id);
          setLikeItem(!likeItem);
        }}
      >
        <LikeIcon icon={cilHeart} className={`${likeItem ? 'like-icon-active' : 'like-icon'}`}/>
      </LikeButton>
    </WrapperCard>
  );
};

export default ProductCard;