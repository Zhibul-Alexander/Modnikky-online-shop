import React, {useEffect, useState} from 'react';

import {
  GridContainer, ProductButton, ProductColorSquare, ProductDescription,
  ProductImg,
  ProductInformation,
  ProductPrice, ProductSize, ProductText,
  ProductTitle,
  Wrapper,
} from './styles';
import {useParams} from 'react-router-dom';
import API from '../../api';
import Catalog from '../../types/api/catalog';

const Product = () => {
  const {productId} = useParams();
  const [product, setProduct] = useState<Catalog[]>([]);

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

  return (
    <Wrapper>
      {product.map(({images, id, name, price, color, availableSizes, description}) => (
        <>
          <GridContainer key={id}>
            <ProductImg src={images[0]}/>
            <ProductImg src={images[1]}/>
            <ProductInformation>
              <ProductTitle className="product-title">{name}</ProductTitle>
              <ProductPrice className="product-common-text">{`${price.value} ${price.currency}`}</ProductPrice>
              <ProductText className="product-common-text">Color</ProductText>
              <ProductColorSquare color={color.hex}></ProductColorSquare>
              <ProductText className="product-common-text">Size</ProductText>
              <ProductSize className="product-common-text">{availableSizes.toString().split(',')}</ProductSize>
              <ProductButton className="product-common-text">Add to bag</ProductButton>
              <ProductDescription className="product-common-text">{description}</ProductDescription>
            </ProductInformation>
          </GridContainer>
        </>
      ))}
    </Wrapper>
  );
};

export default Product;