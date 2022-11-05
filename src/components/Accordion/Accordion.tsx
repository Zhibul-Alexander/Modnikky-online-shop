import React, {useState} from 'react';
import CIcon from '@coreui/icons-react';
import {cilPlus, cilMinus} from '@coreui/icons';


import {HeaderContainer, HeaderTitle, Text, Wrapper} from './styles';

interface IAccordion {
  title: string;
  text: string | React.ReactElement;
}

const Accordion = ({title, text}: IAccordion) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Wrapper>
      <HeaderContainer className="accordion-title" onClick={() => setIsActive(!isActive)}>
        {isActive ?
          <CIcon icon={cilMinus}
                 style={{width: '20px', height: '20px'}}/> :
          <CIcon icon={cilPlus}
                 style={{width: '20px', height: '20px'}}/>}
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContainer>
      {isActive && <Text className="accordion-text">{text}</Text>}
    </Wrapper>
  );
};

export default Accordion;