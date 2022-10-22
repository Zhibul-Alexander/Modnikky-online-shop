import React, {useEffect, useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import SaleCard from './SaleCard/SaleCard';

import Catalog from '../../../types/api/catalog';
import API from '../../../api';

import {Wrapper, Container, ContainerContent, ContainerTitle} from './styles';

const SaleBlock = () => {

  const [saleCards, setSaleCards] = useState<Catalog[]>([]);

  const getData = async () => {
    const getSaleCards = await API.catalog.getCatalog();
    if (!getSaleCards) {
      return;
    }

    setSaleCards(getSaleCards.data);
  };


  useEffect(() => {
    getData().catch(console.error);
  }, []);

  return (
    <>
      <Wrapper>
        <Container>
          <ContainerTitle>#MODNIKKY_Sale</ContainerTitle>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            initialSlide={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="sale-swiper"
          >
            {saleCards.map(({images, price, id}) => (
              <SwiperSlide key={id}>
                <SaleCard images={images[0]} price={price} id={id} key={id}/>
              </SwiperSlide>
            ))}
          </Swiper>
          {/*<ContainerContent>*/}
          {/*  */}
          {/*  {saleCards.map(({images, price, id}) => (*/}
          {/*    <SaleCard images={images[0]} price={price} id={id} key={id}/>*/}
          {/*  ))}*/}
          {/*</ContainerContent>*/}
        </Container>
      </Wrapper>
    </>
  );
};

export default SaleBlock;

