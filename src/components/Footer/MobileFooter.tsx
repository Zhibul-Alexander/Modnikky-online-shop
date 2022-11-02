import React, {useState, useEffect} from 'react';

import Accordion from '../Accordion/Accordion';
import {isEmailValid} from '../../utils/isEmailValid/isEmailValid';

import API from '../../api';

import {
  AccordionContainer,
  GridButton,
  GridColumnText,
  GridColumnTitle,
  GridInput,
  GridInputContainer, MobileInputContainer,
  Wrapper,
} from './styles';

const MobileFooter = () => {
  const [email, setEmail] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [subscribeMessage, setSubscribeMessage] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isEmailValid(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);

  const subscribe = async () => {
    try {
      const postEmail = await API.subscribe.subscribe(email);

      if (postEmail.status === 200) {
        setSubscribeMessage('Thank you for subscribing to our newsletter!');
        setVisible(true);
        setEmail('');

        setTimeout(() => {
          setSubscribeMessage('');
          window.scrollTo(0, 0);
          setVisible(false);
        }, 2000);

      } else {
        setSubscribeMessage('Failed. Please try again later');
        setVisible(true);
        setEmail('');

        setTimeout(() => {
          setSubscribeMessage('');
          window.scrollTo(0, 0);
          setVisible(false);
        }, 2000);
      }
    } catch {
      setSubscribeMessage('Failed. Please try again later');
      setVisible(true);
      setEmail('');

      setTimeout(() => {
        setSubscribeMessage('');
        window.scrollTo(0, 0);
        setVisible(false);
      }, 2000);
    }
  };

  return (
    <Wrapper>
      <MobileInputContainer>
        <GridColumnTitle className="footer-title" style={{marginBottom: '20px'}}>SIGN UP FOR UPDATES</GridColumnTitle>
        <GridColumnText className="footer-text" marginBottom={25} style={{cursor: 'auto'}}>
          Sign up for exclusive early sale access and tailored new arrivals.
        </GridColumnText>

        {visible ? (<p className="accordion-title" style={{margin: '0 0 40px 0px'}}>{subscribeMessage}</p>) : (
          <GridInputContainer className="footer-title-input">
            <GridInput placeholder="Enter your email"
                       type="text"
                       id="footer-email-input"
                       value={email}
                       autoComplete="off"
                       onChange={(e) => setEmail(e.target.value)}/>
            <GridButton disabled={buttonDisabled}
                        buttonDisabled={buttonDisabled}
                        className="footer-title"
                        onClick={subscribe}>
              JOIN
            </GridButton>
          </GridInputContainer>)}
      </MobileInputContainer>
      <AccordionContainer>
        <Accordion title={'CUSTOMER SERVICE'}
                   text={
                     <>
                       <p>Contact</p>
                       <p>Track order</p>
                       <p>Delivery & returns</p>
                       <p>Payment</p>
                       <p>Make a return</p>
                       <p>FQA</p>
                     </>}
        />
      </AccordionContainer>
      <AccordionContainer>
        <Accordion title={'INFO'}
                   text={
                     <>
                       <p>Gift vouchers</p>
                       <p>Size guide</p>
                       <p>Careers at Modnikky</p>
                       <p>About us</p>
                       <p>Legal policies</p>
                     </>}
        />
      </AccordionContainer>
      <AccordionContainer>
        <Accordion title={'FOLLOW US'}
                   text={
                     <>
                       <p>Telegram</p>
                       <p>Instagram</p>
                       <p>Facebook</p>
                     </>}
        />
      </AccordionContainer>
      <AccordionContainer style={{borderBottom: '2px dashed #D8D8D8'}}>
        <Accordion title={'CONTACT US'}
                   text={
                     <>
                       <p>Hello@modnikky.com</p>
                       <p>Phone number</p>
                       <p>Country</p>
                     </>}
        />
      </AccordionContainer>
    </Wrapper>
  );
};

export default MobileFooter;