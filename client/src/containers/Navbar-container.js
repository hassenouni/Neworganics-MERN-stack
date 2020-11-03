import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import { connect } from "react-redux";
import {
  oneKeywordForFilter,
  resetKeywords,
} from "../actions/DataFetchingActions";
import { selectorTotalItemsCart } from "../selectors/selector_list_statistics";
import CheckoutMiniSummaryPreview from "../components/Checkout-mini-summary-preview";
import Submenu from "../components/Submenu";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Badge,
} from "reactstrap";

const styles = {
  itemMenu: {
    padding: "10px",
    listStyleType: "none",
  },
  arrowDown: {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "30px 18px 0 18px",
    borderColor: " #072a48 transparent transparent transparent",
    position: "absolute",
    zIndex: "3",
  },
  navbarBackground: {
    backgroundColor: "#072a48",
    zIndex: 3,
  },
};

const arrowStyleSubmenu = (subMenuCategorySelected, CategoryShop, arrowDown) =>
  subMenuCategorySelected === CategoryShop && <div style={arrowDown}></div>;

class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      subMenuOpen: false,
      subMenuCategorySelected: "",
      openCartPreview: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleSubMenuEnter = (x) => {
    this.setState({
      subMenuOpen: true,
      subMenuCategorySelected: x,
    });
  };

  handleSubMenuExit = () => {
    this.setState({
      subMenuOpen: false,
      subMenuCategorySelected: "",
    });
  };

  render() {
    const {
      sendOneKeyword,
      getCart,
      resetKeywords,
      totalItemsSelectorStats,
    } = this.props;
    const {
      isOpen,
      subMenuCategorySelected,
      subMenuOpen,
      openCartPreview,
    } = this.state;
    const { foods, cosmetics } = this.props.categoriesProducts;
    const { itemMenu, arrowDown, navbarBackground } = styles;

    const categoriesNavItems = (CategoryShop) =>
      isBrowser ? (
        <NavItem
          style={itemMenu}
          onMouseEnter={() => this.handleSubMenuEnter(CategoryShop)}
        >
          <NavLink
            to={`/category/${CategoryShop}`}
            className="text-white"
            onClick={() => resetKeywords()}
          >
            {CategoryShop.charAt(0).toUpperCase() + CategoryShop.slice(1)}
          </NavLink>{" "}
          {arrowStyleSubmenu(subMenuCategorySelected, CategoryShop, arrowDown)}
        </NavItem>
      ) : (
        <NavItem style={itemMenu}>
          <NavLink
            to={`/category/${CategoryShop}`}
            className="text-white"
            onClick={() => {
              return resetKeywords(), this.toggle();
            }}
          >
            {CategoryShop}
          </NavLink>
        </NavItem>
      );

    const cartNavItem = isBrowser ? (
      <Nav className="ml-auto" navbar style={{ cursor: "pointer" }}>
        <NavItem>
          <div
            onClick={() => this.setState({ openCartPreview: !openCartPreview })}
            className="text-white"
          >
            Cart
            <Badge color="success" pill>
              {totalItemsSelectorStats}
            </Badge>
          </div>
        </NavItem>
        {openCartPreview && (
          <div
            style={{
              position: "fixed",
              width: "200px",
              right: "0",
              top: "6.3%",
            }}
          >
            <CheckoutMiniSummaryPreview
              empty={getCart.length === 0 && true}
              getCart={getCart}
            />
          </div>
        )}
      </Nav>
    ) : (
      <NavItem style={itemMenu}>
        <NavLink to="/cart" className="text-white" onClick={this.toggle}>
          cart
        </NavLink>
      </NavItem>
    );

    const subMenuHoverBrowser = subMenuOpen && isBrowser && (
      <Submenu
        CategoryShop={subMenuCategorySelected}
        itemsListByCategoryShop={subMenuCategorySelected === "foods" ? foods : cosmetics}
        sendOneKeyword={sendOneKeyword}
        handleSubMenuExit={this.handleSubMenuExit}
      />
    );

    return (
      <div className="sticky-top">
        <Navbar light expand="md" style={navbarBackground}>
          <Link to="/" style={itemMenu} className="text-white">
            {" "}
            Home
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            {categoriesNavItems("foods")}
            {categoriesNavItems("cosmetics")}
            {cartNavItem}
          </Collapse>
        </Navbar>
        {subMenuHoverBrowser}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoriesProducts: state.categoriesProducts,
  getCart: state.cartReducer,
  totalItemsSelectorStats: selectorTotalItemsCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  sendOneKeyword: (x) => dispatch(oneKeywordForFilter(x)),
  resetKeywords: () => dispatch(resetKeywords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
