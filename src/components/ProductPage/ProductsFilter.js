/** @format */

import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';
export default function ProductsFilter() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          search,
          max,
          min,
          company,
          price,
          shippping,
          hanldeChange,
          storeProducts,
        } = value;
        return (
          <div className='row my-5'>
            <div className='col-10 mx-auto'>
              <FilterWrapper>
                <div>
                  <label htmlFor='search'>search products</label>
                  <input
                    type='text'
                    name='search'
                    id='search'
                    onChange={hanldeChange}
                    value={search}
                    className='filter-item'
                  />
                </div>
                <div>
                  <label htmlFor='company'>company</label>
                  <select
                    name='company'
                    id='company'
                    onChange={hanldeChange}
                    value={company}
                    className='filter-item'
                  >
                    <option value='all'>all</option>
                    <option value='all'>all</option>
                    <option value='all'>all</option>
                    <option value='all'>all</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='price'>
                    <p className='mb-2'>
                      product price: <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type='range'
                    name='price'
                    id='price'
                    min={min}
                    max={max}
                    className='filter-price'
                    value={price}
                    onChange={hanldeChange}
                  />
                </div>
                <div>
                  <label htmlFor='shipping' className='mx-2'>
                    free shipping
                  </label>
                  <input
                    type='checkbox'
                    name='shipping'
                    id='shipping'
                    value={shippping && true}
                    onChange={hanldeChange}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 1px solid var(--darkGrey);
  }
`;
