import React, {useState, useEffect} from 'react';

import MobileFooter from './MobileFooter';
import {useScreenSizeHook} from '../../hooks/useScreenSizeHook';
import {isEmailValid} from '../../utils/isEmailValid/isEmailValid';
import {SCREEN_TYPES} from '../../hooks/useScreenSizeHook/WindowScreenType/WindowScreenType';

import API from '../../api';

import {
  GridButton,
  GridColumn,
  GridColumnText,
  GridColumnTitle,
  GridContainer,
  GridInput,
  GridInputContainer,
  Wrapper,
} from './styles';

const Footer = () => {
  const [email, setEmail] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [subscribeMessage, setSubscribeMessage] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  const {screenType} = useScreenSizeHook();

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

  return screenType === SCREEN_TYPES.DESKTOP ? (
    <Wrapper>
      <GridContainer>
        <GridColumn className="firstColumn" style={{gridArea: 'firstColumn'}}>
          <GridColumnTitle className="footer-title">CUSTOMER SERVICE</GridColumnTitle>
          <GridColumnText className="footer-text">CONTACT</GridColumnText>
          <GridColumnText className="footer-text">TRACK ORDER</GridColumnText>
          <GridColumnText className="footer-text">DELIVERY & RETURNS</GridColumnText>
          <GridColumnText className="footer-text">PAYMENT</GridColumnText>
          <GridColumnText className="footer-text">MAKE A RETURN</GridColumnText>
          <GridColumnText className="footer-text">FAQ</GridColumnText>
        </GridColumn>

        <GridColumn className="secondColumn" style={{gridArea: 'secondColumn'}}>
          <GridColumnTitle className="footer-title">INFO</GridColumnTitle>
          <GridColumnText className="footer-text">GIFT VOUCHERS</GridColumnText>
          <GridColumnText className="footer-text">SIZE GUIDE</GridColumnText>
          <GridColumnText className="footer-text">CAREERS AT MODNIKKY</GridColumnText>
          <GridColumnText className="footer-text">ABOUT US</GridColumnText>
          <GridColumnText className="footer-text">LEGAL POLICIES</GridColumnText>
        </GridColumn>

        <GridColumn className="thirdColumn" style={{gridArea: 'thirdColumn'}}>
          <GridColumnTitle className="footer-title">FOLLOW US</GridColumnTitle>
          <GridColumnText className="footer-text">FACEBOOK</GridColumnText>
          <GridColumnText className="footer-text">INSTAGRAM</GridColumnText>
          <GridColumnText className="footer-text">TELEGRAM</GridColumnText>
        </GridColumn>

        <GridColumn className="fourthColumn" style={{gridArea: 'fourthColumn'}}>
          <GridColumnTitle className="footer-title">CONTACT US</GridColumnTitle>
          <GridColumnText className="footer-text">Hello@modnikky.com</GridColumnText>
          <GridColumnText className="footer-text">PHONE NUMBER</GridColumnText>
          <GridColumnText className="footer-text">COUNTRY</GridColumnText>
        </GridColumn>

        <GridColumn className="fifth" style={{gridArea: 'fifth', justifySelf: 'center', alignItems: 'center'}}>
          <GridColumnTitle className="footer-title" style={{marginBottom: '20px'}}>SIGN UP FOR UPDATES</GridColumnTitle>
          <GridColumnText className="footer-text" marginBottom={40} style={{cursor: 'auto'}}>
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

        </GridColumn>
      </GridContainer>
    </Wrapper>
  ) : (
    <MobileFooter/>
  );
};

export default Footer;