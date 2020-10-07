/** @format */

import React from 'react';
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

export default function Info() {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={aboutBcg}
              alt='about img'
              className='img-fluid img-thumbnail'
              style={{ background: 'var(--darkGrey)' }}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='about us' />
            <p className='text-lead text-muted my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae omnis placeat nesciunt corrupti distinctio perferendis,
              fugit aliquam accusamus provident, accusantium numquam deleniti
              veniam dolore sequi hic ullam! Praesentium, tempore amet.
            </p>
            <button
              className='main-link'
              type='button'
              style={{ marginTop: '2rem' }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
