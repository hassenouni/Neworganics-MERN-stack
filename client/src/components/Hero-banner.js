import React from "react";
import { isMobile } from "react-device-detect";
import ButtonLinkCategoryShopPage from "./Button-link-CategoryShop-page";
import { Jumbotron, Container } from "reactstrap";

const styles = {
  bannerCoverPc: {
    backgroundImage: 'url("/images/banner-cover-pc.jpg")',
    backgroundSize: "cover",
  },
  bannerCoverMobile: {
    backgroundImage: 'url("/images/banner-cover-mobile.jpg")',
    backgroundSize: "cover",
  },
  textBanner: {
    textAlign: "center",
    color: "white",
  },
  centerButtons: {
    textAlign: "center",
    padding: "30px",
  },
  titleH1Pc: {
    fontSize: "46px",
    color: "#252525",
    lineHeight: "52px",
    fontWeight: "700",
    margin: "20px 0 15px 80px",
  },
  titleH1Mobile: {
    fontSize: "60px",
  },
};

const {
  bannerCoverPc,
  bannerCoverMobile,
  textBanner,
  centerButtons,
  titleH1Mobile,
  titleH1Pc,
} = styles;

const HeroBanner = () => (
  <Jumbotron fluid style={isMobile ? bannerCoverMobile : bannerCoverPc}>
    <Container fluid style={{ height: "300px" }}>
      <div style={textBanner}>
        <h2 className="display-3" style={isMobile ? titleH1Mobile : titleH1Pc}>
          Vegetable
          <br></br> 100% Organic
        </h2>
        <span
          style={{
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: "700",
            letterSpacing: "4px",
            color: "#f8f9fa",
            fontFamily: "Cairo, sans-serif",
            margin: "20px 0 15px 80px",
          }}
        >
          FRUIT FRESH
        </span>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "26px",
            color: "#f8f9fa",
            fontFamily: "Cairo, sans-serif",
            margin: "20px 0 15px 80px",
          }}
        >
          Free Pickup and Delivery Available
        </p>
      </div>
      <div style={centerButtons}>
        <ButtonLinkCategoryShopPage
          CategoryShop={"foods"}
          content="shop foods"
        />
        <ButtonLinkCategoryShopPage
          CategoryShop={"cosmetics"}
          content="shop cosmetics"
        />
      </div>
    </Container>
  </Jumbotron>
);

export default HeroBanner;
