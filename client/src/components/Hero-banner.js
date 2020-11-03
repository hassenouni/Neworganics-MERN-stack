import React from 'react'
import {
  isMobile
} from "react-device-detect";
import ButtonLinkCategoryShopPage from './Button-link-CategoryShop-page'
import { Jumbotron, Container } from 'reactstrap';

const styles = {
  bannerCoverPc: {
    backgroundImage: 'url("/images/banner-cover-pc.jpg")',
    backgroundSize: 'cover'
  },
  bannerCoverMobile: {
    backgroundImage: 'url("/images/banner-cover-mobile.jpg")',
    backgroundSize: 'cover'
  },
  textBanner: {
    textShadow: "3px 3px 3px grey",
    textAlign: 'center',
    color:'white'
  },
  centerButtons: {
    textAlign: 'center',
    padding: '30px'
  },
  titleH1Pc: {
    fontSize: '80px'
  },
  titleH1Mobile: {
    fontSize: '60px'
  }
};

const { bannerCoverPc, bannerCoverMobile, textBanner, centerButtons, titleH1Mobile, titleH1Pc } = styles

const HeroBanner = () => (
  <Jumbotron fluid style={isMobile? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{height: '300px'}}>
      <div style={textBanner}>
        <h3 className="display-3" style={isMobile ? titleH1Mobile : titleH1Pc}>Vegetable 100% Organic</h3>
        <p>FRUIT FRESH</p>
        <p>Free Pickup and Delivery Available</p>
      </div>
      <div style={centerButtons}>
        <ButtonLinkCategoryShopPage CategoryShop={'foods'} content='shop foods' />
        <ButtonLinkCategoryShopPage CategoryShop={'cosmetics'} content='shop cosmetics' />
      </div>
    </Container>
  </Jumbotron>
);

export default HeroBanner;