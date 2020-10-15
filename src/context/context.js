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
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    sigleProduct: {},
    loading: true,
    next: 3,
    arrayForHoldingProduct: [],
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    // console.log(storeProducts);

    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );

    this.setState(
      {
        storeProducts,
        featuredProducts,
        // filteredProducts: storeProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
      },
      () => {
        this.addTotals();
        this.showProduct(0, 3);
      }
    );
  };

  showProduct = (start, end) => {
    let arrayForHoldingProduct = [];
    const slicePrdouct = this.state.storeProducts.slice(start, end);
    arrayForHoldingProduct = [
      ...this.state.arrayForHoldingProduct,
      ...slicePrdouct,
    ];
    this.setState({
      filteredProducts: arrayForHoldingProduct,
      arrayForHoldingProduct: arrayForHoldingProduct,
    });
  };

  showMore = () => {
    // console.log(this.state.next);
    // let next = this.state.next + 3;
    // this.showProduct(this.state.next, next);
    // this.setState({
    //   next: next,
    // });
    this.showProduct(this.state.next, this.state.next + 3);
    this.setState({ next: this.state.next + 3 });
  };

  getStorageCart = () => {
    let cart;
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      cart = [];
    }
    return cart;
  };

  getStorageProduct = () => {
    return localStorage.getItem('singleProduct')
      ? JSON.parse(localStorage.getItem('singleProduct'))
      : {};
  };

  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach((item) => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.2;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total,
    };
  };

  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });
  };

  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  };

  addtoCart = (id) => {
    // console.log(id);
    let tempCart = [...this.state.cart];
    let tempProduct = [...this.state.storeProducts];
    let tempItem = tempCart.find((item) => item.id === id);
    // console.log(tempItem);
    if (!tempItem) {
      tempItem = tempProduct.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
      // console.log(tempCart);
    } else {
      console.log('no ok');
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
      // console.log(tempItem.total);
    }

    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  setSingleProduct = (id) => {
    console.log(`Single Product ${id}`);
    let product = this.state.storeProducts.find((item) => item.id === id);
    localStorage.setItem('singleProduct', JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false,
    });
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
          showMore: this.showMore,
          showProduct: this.showProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
