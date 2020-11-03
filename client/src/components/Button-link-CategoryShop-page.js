import PropTypes from 'prop-types';
import React from 'react'
import {
  isMobile
} from "react-device-detect";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom' 

const propTypes = {
  CategoryShop: PropTypes.string.isRequired
};

const styles = {
  centerButtons: {
    textAlign: 'center',
    padding: '30px'
  },
  buttonStylePc: {
    margin:'20px',
    padding: '15px'
  },
  buttonStyleMobile: {
    margin:'5px',
    padding: '15px'
  }
}

const ButtonLinkCategoryShopPage = ({CategoryShop, content=CategoryShop}) => {

  const {buttonStylePc, buttonStyleMobile } = styles
  
  return <Link to={`/category/${CategoryShop}`} className="text-white"><Button size={isMobile ? 'md' : 'lg'} color="light" style={isMobile ? buttonStyleMobile : buttonStylePc}>{content}</Button></Link>
}

ButtonLinkCategoryShopPage.propTypes = propTypes;

export default ButtonLinkCategoryShopPage