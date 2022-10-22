import React from 'react';

import {CardImg, CardPrice, CardPriceContainer, CardSalePrice, WrapperCard} from './styles';

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
  return (
    <WrapperCard key={id}>
      <CardImg src={images}/>
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
    </WrapperCard>
  );
};

export default ProductCard;