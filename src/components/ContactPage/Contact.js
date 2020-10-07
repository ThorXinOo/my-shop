/** @format */

import React from 'react';
import Title from '../Title';

export default function Contact() {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6 my-3'>
          <Title title='Contact Us' />
          <form
            className='mt-5'
            action='https://formspree.io/f/maylqbzd'
            method='post'
          >
            <div className='form-gorup my-3'>
              <input
                type='text'
                className='form-control'
                name='fisrtName'
                placeholder='John Smith'
              />
            </div>
            <div className='form-gorup my-3'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='john@gmail.com'
              />
            </div>
            <div className='form-gorup my-3'>
              <input
                type='text'
                className='form-control'
                name='subject'
                placeholder='Import !!!'
              />
            </div>
            <div className='form'>
              <textarea
                name='message'
                rows='10'
                className='form-control'
                placeholder='Hello there buddy'
              ></textarea>
            </div>
            <div className='form-group mt-3'>
              <input
                type='submit'
                className='form-control bg-primary text-white'
                value='Send'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
