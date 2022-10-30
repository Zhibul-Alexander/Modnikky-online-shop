import React, {useEffect, useState} from 'react';
import MCloseIcon from '@material-ui/icons/Close';

import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

import API from '../../api';
import Catalog from '../../types/api/catalog';

import {
  Wrapper,
  ContainerImg,
  Img,
  ContainerText,
  ContainerTitle,
  Container,
  Content,
  RemoveButton, ContainerPriceText,
  ButtonContainer,
  ProductButton,
} from './styles';
import {ProductButtonCalc, ProductSizeOption, ProductSizeSelect} from '../../pages/Product/styles';

type CartItemProps = {
  id: string
}

const FavoriteItem = ({id}: CartItemProps) => {
  const [favoritesProducts, setFavoritesProducts] = useState<Catalog[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<string>('');

  const [sizeIsValid, setSizeIsValid] = useState<boolean>(false);
  const [quantityIsValid, setQuantityIsValid] = useState<boolean>(false);
  const [addButtonDisabled, setAddButtonDisabled] = useState<boolean>(false);

  const {removeFavoriteItem, increaseCartQuantity, decreaseCartQuantity, selectQuantity} = useShoppingCart();

  const getData = async () => {
    const getCatalog = await API.catalog.getCatalog();
    if (!getCatalog) {
      return;
    }
    filterProduct(getCatalog.data, id);
  };

  const filterProduct = (catalog: Catalog[], id: string) => {
    let favoritesProductsData: Catalog[] = [];

    catalog.filter((value) => {
      if (value.id === id) {
        favoritesProductsData.push(value);
      }
    });

    setFavoritesProducts(favoritesProductsData);
  };

  useEffect(() => {
    getData().catch(console.error);
  }, []);

  useEffect(() => {
    if (selectedSize === '') {
      setSizeIsValid(false);
    } else {
      setSizeIsValid(true);
    }
  }, [selectedSize]);

  useEffect(() => {
    if (selectedQuantity === '') {
      setQuantityIsValid(false);
    } else {
      setQuantityIsValid(true);
    }
  }, [selectedQuantity]);

  useEffect(() => {
    if (sizeIsValid && quantityIsValid) {
      setAddButtonDisabled(false);
    } else {
      setAddButtonDisabled(true);
    }
  }, [sizeIsValid, quantityIsValid]);

  return (
    <Wrapper>
      {favoritesProducts.map(({images, id, name, price, color, description, availableSizes}) => (
        <div key={id} style={{display: 'flex', flexDirection: 'column'}}>
          <Container>
            <ContainerImg>
              <Img src={images[0]}/>
            </ContainerImg>

            <Content>
              <ContainerTitle className="bag-container-title">{name}</ContainerTitle>
              <ContainerPriceText
                className="bag-container-text">{`${Number(price.value) * 0.6 / 10} ${price.currency}`}</ContainerPriceText>

              <ContainerText className="bag-container-text">Color: {color.name}</ContainerText>
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
              <ProductSizeSelect className="product-common-text"
                                 name="select-quantity"
                                 onChange={(event) => setSelectedQuantity(event.target.value)}>
                <ProductSizeOption disabled={true} selected={true}>Select quantity</ProductSizeOption>
                <ProductSizeOption value={'1'}>1</ProductSizeOption>
                <ProductSizeOption value={'2'}>2</ProductSizeOption>
                <ProductSizeOption value={'3'}>3</ProductSizeOption>
                <ProductSizeOption value={'4'}>4</ProductSizeOption>
                <ProductSizeOption value={'5'}>5</ProductSizeOption>
              </ProductSizeSelect>
            </Content>

          </Container>

          <ButtonContainer>
            <ProductButton
              disabled={addButtonDisabled}
              disabledBg={addButtonDisabled}
              className="product-common-text"
              onClick={() => {
                selectQuantity(id, selectedSize, Number(selectedQuantity));
                removeFavoriteItem(id);
              }}>
              Add to bag
            </ProductButton>

            <RemoveButton
              onClick={() => removeFavoriteItem(id)}
              className="bag-container-text"
            >
              <MCloseIcon style={{width: '36px', height: '36px', marginBottom: '8px'}}/>
              <div style={{margin: 0}}>Remove</div>
            </RemoveButton>
          </ButtonContainer>

        </div>
      ))}
    </Wrapper>
  );
};

export default FavoriteItem;