/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ProductConsumer } from '../context/context';
import SingleProductImg from '../images/singleProductBcg.jpeg';
export default function SingleProductPage() {
  return (
    <>
      <Hero img={SingleProductImg} title='single product'></Hero>
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addtoCart, loading } = value;
          if (loading) {
            console.log('hello from loading');
            return <h1>product loading...</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image,
          } = singleProduct;

          return (
            <section className='py-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-10 col-sm-8 mx-auto col-md-6 my-3'>
                    <img
                      src={`../${image}`}
                      alt='singleProduct'
                      className='img-fluid'
                    />
                  </div>
                  <div className='col-10 col-sm-8 mx-auto col-md-6 my-3'>
                    <h5 className='text-title'>model:{title}</h5>
                    <h5 className='text-capitalize text-muted'>
                      company: ${company}
                    </h5>
                    <h5 className='text-main text-capitalize mb-4'>
                      price : ${price}
                    </h5>
                    <p className='text-capitalize text-title mt-3'>
                      some info about product:
                    </p>
                    <p>${description}</p>
                    <button
                      className='main-link'
                      style={{ margin: '0.75rem' }}
                      onClick={() => addtoCart(id)}
                    >
                      Add to Cart
                    </button>
                    <Link
                      to='/products'
                      style={{ margin: '0.75rem' }}
                      className='main-link'
                    >
                      Back to Products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
