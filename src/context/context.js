/** @format */

import React, { Component, createContext } from 'react';

import { linkData } from './linkData';
import { socialData } from './socialData';
import { items } from './productData';

const ProductContext = createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socials: socialData,
    cart: [],
    cartItmes: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    sigleProduct: {},
    loading: true,
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const product = { id, ...item.fields };
      return product;
    });
    // console.log(storeProducts);

    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );

    this.setState({
      storeProducts,
      featuredProducts,
      filteredProducts: storeProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false,
    });
  };

  getStorageCart = () => {
    return [];
  };

  getStorageProduct = () => {
    return {};
  };

  getTotals = () => {};

  addTotals = () => {};

  syncStorage = () => {};

  addtoCart = (id) => {
    console.log(id);
  };

  setSingleProduct = (id) => {
    console.log(`Single Product ${id}`);
  };

  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  closeCart = () => {
    this.setState({ cartOpen: false });
  };
  openCart = () => {
    this.setState({ cartOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
          setProducts: this.setProudcts,
          addtoCart: this.addtoCart,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
