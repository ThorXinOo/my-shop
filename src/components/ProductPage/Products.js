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
        const { storeProducts, filteredProducts, showMore, loading } = value;
        return (
          <section className='py-5'>
            <div className='container'>
              <Title center title='our products' />
              <div className='row py-5'>
                {filteredProducts.map((product) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
              {/* <button onClick={showMore}>load more</button>
               */}
              <div className='row mt-0'>
                <div className='col text-center'>
                  {storeProducts.length !== filteredProducts.length ? (
                    loading ? ( // <button className='main-link'>Loading...</button>
                      <p>Loading...</p>
                    ) : (
                      <button onClick={showMore} className='main-link'>
                        More products
                      </button>
                    )
                  ) : (
                    <p>No more Product</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
