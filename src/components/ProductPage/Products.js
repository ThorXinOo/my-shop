/** @format */

import React from 'react';
import { ProductConsumer } from '../../context/context';
import Title from '../Title';
import Product from '../Product';
import Loader from '../Loader';

export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts, showMore, loading } = value;
        return (
          <section className='py-5'>
            <div className='container'>
              <Title center title='our products' />
              {loading ? (
                <Loader />
              ) : (
                <div className='row py-5'>
                  {filteredProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              )}
              <button onClick={showMore}>load more</button>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
