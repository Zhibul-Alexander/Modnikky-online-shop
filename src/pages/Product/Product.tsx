import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {cilHeart} from '@coreui/icons';

import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';
import {useScreenSizeHook} from '../../hooks/useScreenSizeHook';

import Accordion from '../../components/Accordion/Accordion';

import API from '../../api';
import Catalog from '../../types/api/catalog';

import {
  LikeButton,
  LikeIcon,
  ProductButton,
  ProductButtonCalc, ProductButtonContainer,
  ProductButtonRemove,
  ProductColorSquare,
  ProductContent,
  ProductImg,
  ProductImgContainer,
  ProductInformation,
  ProductPrice,
  ProductSizeOption,
  ProductSizeSelect,
  ProductText,
  ProductTitle,
  Wrapper,
} from './styles';
import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

const Product = () => {
  const {productId} = useParams();
  const {screenType} = useScreenSizeHook();

  const [product, setProduct] = useState<Catalog[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [productIdNumber, setProductIdNumber] = useState<string>('0');
  const [addButtonDisabled, setAddButtonDisabled] = useState<boolean>(true);
  const [likeItem, setLikeItem] = useState<boolean>(false);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    clickFavoriteItem,
  } = useShoppingCart();

  const quantity = getItemQuantity(productIdNumber, selectedSize);

  const getData = async () => {
    const getSaleCards = await API.catalog.getCatalog();
    if (!getSaleCards) {
      return;
    }
    if (!productId) {
      return;
    }

    filterProduct(getSaleCards.data, productId);
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

  useEffect(() => {
    getData().catch(console.error);
  }, [productId]);

  useEffect(() => {
    product.forEach(item => setProductIdNumber((item.id)));
  }, [product]);

  useEffect(() => {
    if (selectedSize === '') {
      setAddButtonDisabled(true);
    } else {
      setAddButtonDisabled(false);
    }
  }, [selectedSize]);

  return (
    <Wrapper>
      {product.map(({images, id, name, price, color, availableSizes, description}) => (
        <ProductContent key={id} screenType={screenType}>
          <ProductImgContainer>
            <ProductImg src={images[0]}/>
          </ProductImgContainer>
          {screenType === SCREEN_TYPES.DESKTOP &&
            <ProductImgContainer>
              <ProductImg src={images[1]}/>
            </ProductImgContainer>}
          <ProductInformation screenType={screenType}>
            <ProductTitle className="product-title">{name}</ProductTitle>
            <ProductPrice
              className="product-common-text">{`${Number(price.value) * 0.6 / 10} ${price.currency}`}</ProductPrice>
            <ProductText className="product-common-text">Color: {color.name}</ProductText>
            <ProductColorSquare color={color.hex}></ProductColorSquare>
            <ProductText className="product-common-text">Size</ProductText>
            <ProductSizeSelect className="product-common-text"
                               name="select"
                               onChange={(event) => setSelectedSize(event.target.value)}>
              <ProductSizeOption disabled={true} selected={true}>Select size</ProductSizeOption>
              {availableSizes.toString().split(',').map((size) => (
                <ProductSizeOption key={size.toUpperCase()} value={size.toUpperCase()}>
                  {size.toUpperCase()}
                </ProductSizeOption>
              ))}
            </ProductSizeSelect>
            {quantity === 0 ? (
                <div style={{display: 'flex', boxSizing: 'border-box'}}>
                  <ProductButton
                    disabled={addButtonDisabled}
                    disabledBg={addButtonDisabled}
                    className="product-common-text"
                    onClick={() => increaseCartQuantity(id, selectedSize)}>
                    Add to bag
                  </ProductButton>
                  <LikeButton
                    onClick={() => {
                      clickFavoriteItem(id);
                      setLikeItem(!likeItem);
                    }}
                    className={`${likeItem ? 'like-button-active' : 'like-button'}`}
                  >
                    <LikeIcon icon={cilHeart} className={`${likeItem ? 'like-icon-active' : 'like-icon'}`}/>
                  </LikeButton>
                </div>
              ) :
              (<>
                <ProductButtonContainer>
                  <ProductButton className="product-common-text">Quantity: {quantity}</ProductButton>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <ProductButtonCalc className="product-common-text"
                                       onClick={() => increaseCartQuantity(id, selectedSize)}>+</ProductButtonCalc>
                    <ProductButtonCalc className="product-common-text"
                                       onClick={() => decreaseCartQuantity(id, selectedSize)}>-</ProductButtonCalc>
                  </div>
                </ProductButtonContainer>

                <ProductButtonRemove onClick={() => removeFromCart(id, selectedSize)}>remove</ProductButtonRemove>
              </>)}

            <Accordion title={'Product description'} text={description}/>

          </ProductInformation>
        </ProductContent>
      ))}
    </Wrapper>
  );
};

export default Product;