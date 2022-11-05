import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import ProductCard from '../../components/ProductCard/ProductCard';

import API from '../../api';
import Catalog from '../../types/api/catalog';

import {ContainerTitle, GridContainer, Wrapper} from './styles';

const CategoryPage = () => {
  const {category} = useParams();
  const [saleCards, setSaleCards] = useState<Catalog[]>([]);

  const getData = async () => {
    const getSaleCards = await API.catalog.getCatalog();
    if (!getSaleCards) {
      return;
    }
    if (!category) {
      return;
    }

    categoryType(getSaleCards.data, category);
  };

  const categoryType = (catalog: Catalog[], pageType: string) => {
    let productArray: Catalog[] = [];

    catalog.filter((value) => {
      if (value.type.toLowerCase() == pageType) {
        productArray.push(value);
      }
    });

    setSaleCards(productArray);
  };

  useEffect(() => {
    getData().catch(console.error);
  }, []);

  return (
    <Wrapper>
      <ContainerTitle className="product-title">
        {category}
      </ContainerTitle>
      <GridContainer>
        {saleCards.map(({images, price, id}) => (
          <ProductCard images={images[1]} price={price} id={id} key={id}/>
        ))}
      </GridContainer>
    </Wrapper>
  );
};

export default CategoryPage;