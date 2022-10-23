import React from 'react';
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
  return (
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
          <GridColumnText className="footer-text">hello@modnikky.com</GridColumnText>
          <GridColumnText className="footer-text">PHONE NUMBER</GridColumnText>
          <GridColumnText className="footer-text">COUNTRY</GridColumnText>
        </GridColumn>

        <GridColumn className="fifth" style={{gridArea: 'fifth', justifySelf: 'center', alignItems: 'center'}}>
          <GridColumnTitle className="footer-title" style={{marginBottom: '20px'}}>SIGN UP FOR UPDATES</GridColumnTitle>
          <GridColumnText className="footer-text" marginBottom={80}>
            Sign up for exclusive early sale access and tailored new arrivals.
          </GridColumnText>

          <GridInputContainer className="footer-title">
            <GridInput placeholder="Your email address"/>
            <GridButton>JOIN</GridButton>
          </GridInputContainer>
        </GridColumn>
      </GridContainer>
    </Wrapper>
  );
};

export default Footer;