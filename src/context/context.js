/** @format */

import React, { Component, createContext } from 'react';

const ProductContext = createContext();

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value='Hello From Context'>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
