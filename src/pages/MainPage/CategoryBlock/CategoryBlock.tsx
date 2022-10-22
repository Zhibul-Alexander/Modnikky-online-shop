import React, {useState, useEffect} from 'react';

import API from '../../../api/index';

import {Container, ContainerContent, ContainerTitle, ContentCategory, Wrapper} from './styles';

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
          <ContainerTitle className="main-page-title">Shop by the <b>Category</b></ContainerTitle>
          <ContainerContent>
            {category.map((type, index) => (
              <ContentCategory key={index} className="category-block-link"
                to={`/categories/${type.toLowerCase()}`}>
                {type}
              </ContentCategory>
            ))}
          </ContainerContent>
        </Container>
      </Wrapper>
    </>
  );
};

export default CategoryBlock;