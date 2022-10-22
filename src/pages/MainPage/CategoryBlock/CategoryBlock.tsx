import React, {useState, useEffect} from 'react';

import API from '../../../api/index';

import Catalog from '../../../types/api/catalog';

import {Container, ContainerContent, ContainerTitle, ContentCategory, TypeLink, Wrapper} from './styles';

const CategoryBlock = () => {
  const [category, setCategory] = useState<string[]>([]);

  const getData = async () => {
    const catalogData = await API.catalog.getCatalog();
    if (!catalogData) {
      return;
    }

    const allCatalogType: string[] = [];
    catalogData.data.forEach(({type}) => (
      allCatalogType.push(type)
    ));
    const filteredArray = allCatalogType.filter((item, index) => {
      return allCatalogType.indexOf(item) === index;
    });
    setCategory(filteredArray);
  };


  useEffect(() => {
    getData().catch(console.error);
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <ContainerTitle>Shop by the Category</ContainerTitle>
          <ContainerContent>
            {category.map((type, index) => (
              <ContentCategory key={index} className="category-block-items">
                <TypeLink to={`/categories/${type.toLowerCase()}`} className="category-block-items-link">
                  {type}
                </TypeLink>
              </ContentCategory>
            ))}
          </ContainerContent>
        </Container>
      </Wrapper>
    </>
  );
};

export default CategoryBlock;