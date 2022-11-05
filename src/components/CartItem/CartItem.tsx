import React, {useEffect, useState} from 'react';
import MCloseIcon from '@material-ui/icons/Close';

import {useShoppingCart} from '../../context/ShoppingCartContext/ShoppingCartContext';

import Catalog from '../../types/api/catalog';
import API from '../../api';

import {
  Wrapper,
  ContainerImg,
  Img,
  ContainerText,
  ContainerTitle,
  Container,
  Content,
  RemoveButton, ContainerPriceText,
} from './styles';

type CartItemProps = {
  id: string
  options: {
    quantity: number
    size: string
  }
}

const CartItem = ({id, options: {quantity, size}}: CartItemProps) => {
  const [product, setProduct] = useState<Catalog[]>([]);

  const getData = async () => {
    const getSaleCards = await API.catalog.getCatalog();
    if (!getSaleCards) {
      return;
    }
    filterProduct(getSaleCards.data, id);
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

  const {removeFromCart} = useShoppingCart();

  return (
    <Wrapper>
      {product.map(({images, id, name, price, color, description}) => (
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
              <ContainerText className="bag-container-text">Size: {size}</ContainerText>
              <ContainerText className="bag-container-text">Quantity: {quantity}</ContainerText>
            </Content>

          </Container>

          <RemoveButton
            onClick={() => removeFromCart(id, size)}
            className="bag-container-text"
          >
            <MCloseIcon style={{width: '34px', height: '34px', marginRight: '8px'}}/>
            <span>Remove</span>
          </RemoveButton>
        </div>
      ))}
    </Wrapper>
  );
};

export default CartItem;