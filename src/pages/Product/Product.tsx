import React, {useEffect, useState} from 'react';

import {
  GridContainer, ProductButton, ProductButtonCalc, ProductButtonRemove, ProductColorSquare, ProductDescription,
  ProductImg,
  ProductInformation,
  ProductPrice, ProductSizeOption, ProductSizeSelect, ProductText,
  ProductTitle,
  Wrapper,
} from './styles';
import {useParams} from 'react-router-dom';
import API from '../../api';
import Catalog from '../../types/api/catalog';

import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

const Product = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState<Catalog[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [productIdNumber, setProductIdNumber] = useState<string>('0');
  const [addButtonDisabled, setAddButtonDisabled] = useState<boolean>(true);

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
    product.forEach(item => setProductIdNumber((item.id)));
  }, [product]);

  useEffect(() => {
    if (selectedSize === '') {
      setAddButtonDisabled(true);
    } else {
      setAddButtonDisabled(false);
    }
  }, [selectedSize]);

  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
  const quantity = getItemQuantity(productIdNumber, selectedSize);

  return (
    <Wrapper>
      {product.map(({images, id, name, price, color, availableSizes, description}) => (
        <>
          <GridContainer key={id}>
            <ProductImg src={images[0]}/>
            <ProductImg src={images[1]}/>
            <ProductInformation>
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
                {availableSizes.toString().split(',').map((size, index) => (
                  <ProductSizeOption key={size.toUpperCase()} value={size.toUpperCase()}>
                    {size.toUpperCase()}
                  </ProductSizeOption>
                ))}
              </ProductSizeSelect>
              {quantity === 0 ? (
                  <ProductButton
                    disabled={addButtonDisabled}
                    disabledBg={addButtonDisabled}
                    className="product-common-text"
                    onClick={() => increaseCartQuantity(id, selectedSize)}>
                    Add to bag
                  </ProductButton>) :
                (<>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '90px',
                    marginBottom: '10px',
                    maxWidth: '300px',
                    width: '100%',
                  }}>
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
                  </div>


                  <ProductButtonRemove onClick={() => removeFromCart(id, selectedSize)}>remove</ProductButtonRemove>
                </>)}
              <ProductDescription className="product-common-text">{description}</ProductDescription>
            </ProductInformation>
          </GridContainer>
        </>
      ))}
    </Wrapper>
  );
};

export default Product;