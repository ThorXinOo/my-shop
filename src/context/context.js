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
    next: 6,
    arrayForHoldingProduct: [],
    seemoreload: false,
    search: '',
    price: 0,
    min: 0,
    max: 0,
    company: 'all',
    shipping: false,
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
    let maxPrice = Math.max(...storeProducts.map((item) => item.price));

    this.setState(
      {
        storeProducts,
        featuredProducts,
        filteredProducts: storeProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
        price: maxPrice,
        max: maxPrice,
      },
      () => {
        this.addTotals();
        this.setLoading();
        setTimeout(() => {
          this.showProduct(0, 6, 'set');
        }, 1000);
      }
    );
  };

  setLoading = () => {
    this.setState({
      loading: true,
    });
  };
  showProduct = (start, end, type = '') => {
    let arrayForHoldingProduct = [];
    const slicePrdouct = this.state.filteredProducts.slice(start, end);
    arrayForHoldingProduct = [
      ...this.state.arrayForHoldingProduct,
      ...slicePrdouct,
    ];

    this.setState({
      // filteredProducts: arrayForHoldingProduct,
      arrayForHoldingProduct: arrayForHoldingProduct,
    });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  };

  showMore = () => {
    // this.setLoading();
    this.showProduct(this.state.next, this.state.next + 6);
    this.setState({
      seemoreload: true,
    });
    setTimeout(() => {
      this.setState({ next: this.state.next + 6, seemoreload: false });
    }, 2000);
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

  //addTotals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total,
    });
  };

  // syncStorage session of cart
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
      console.log(tempCart);
    } else {
      // console.log('no ok');
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

  // functionality of CartPage
  // increment
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    // console.log(cartItem.count++);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    console.log(tempCart);
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  // decrement
  decrement = (id) => {
    // console.log('decrement');
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count = cartItem.count - 1;
    if (cartItem.count === 0) {
      this.removeitem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  // removeitem
  removeitem = (id) => {
    // console.log('removeitem');
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  clearCart = () => {
    console.log('Clear Cart');
    this.setState(
      () => {
        return {
          cart: [],
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  //handle change
  handleChange = (event) => {
    // console.log('Handle Change');
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    // console.log(`Name : ${name}, Value ${value}`);
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.sortData();
      }
    );
  };
  sortData = () => {
    // console.log('Sort Data....');
    const { storeProducts, company, price, shipping, search } = this.state;
    let tempProducts = [...storeProducts];
    // console.log(typeof price);
    let tempPrice = parseInt(price);
    console.log(typeof tempPrice);

    tempProducts = tempProducts.filter((item) => item.price <= tempPrice);

    if (company !== 'all') {
      tempProducts = tempProducts.filter((item) => item.company === company);
    }
    if (shipping) {
      tempProducts = tempProducts.filter((item) => item.freeShipping === true);
    }
    if (search.length > 0) {
      tempProducts = tempProducts.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTitle = item.title.toLowerCase().slice(0, search.length);
        // console.log(`tempSearch ${tempSearch} & tempTitle ${tempTitle}`);
        if (tempSearch === tempTitle) {
          return item;
        }
      });
    }
    this.setState({ filteredProducts: tempProducts });
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
          setLoading: this.setLoading,
          increment: this.increment,
          decrement: this.decrement,
          removeitem: this.removeitem,
          clearCart: this.clearCart,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
