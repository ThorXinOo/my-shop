/** @format */

import React from 'react';
import { ProductConsumer } from '../../context/context';
import Title from '../Title';
import Product from '../Product';
import Loader from '../Loader';
import ProductsFilter from '../ProductPage/ProductsFilter';

export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          storeProducts,
          filteredProducts,
          showMore,
          loading,
          seemoreload,
        } = value;
        return (
          <section className='py-5'>
            <div className='container'>
              <Title center title='our products' />

              <ProductsFilter />

              <div className='row'>
                <div className='col-10 mx-auto'>
                  <h6 className='text-title'>
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>
              <div className='row py-5'>
                {filteredProducts.length === 0 ? (
                  <div className='col text-title text-center'>
                    sorry, no items matched your search
                  </div>
                ) : (
                  filteredProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
                  })
                )}
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
