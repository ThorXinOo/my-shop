/** @format */

import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Service from '../components/HomePage/Service';
import Featured from '../components/HomePage/Featured';
export default function HomePage() {
  return (
    <>
      <Hero title='awesome gadgets' max='true'>
        <Link to='/products' className='main-link' style={{ margin: '2rem' }}>
          Our Products
        </Link>
      </Hero>
      <Service />
      <Featured />
    </>
  );
}
