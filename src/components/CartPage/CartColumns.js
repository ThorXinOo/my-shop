/** @format */

import React from 'react';

export default function CartColumns() {
  return (
    <div className='container-fluid text-center d-none d-lg-block'>
      <div className='row'>
        <div className='col-lg-2'>
          <p className='text-upper'>proudcts </p>
        </div>
        <div className='col-lg-2'>
          <p className='text-upper'>name of products </p>
        </div>
        <div className='col-lg-2'>
          <p className='text-upper'>price </p>
        </div>
        <div className='col-lg-2'>
          <p className='text-upper'>remove </p>
        </div>
        <div className='col-lg-2'>
          <p className='text-upper'>total </p>
        </div>
      </div>
    </div>
  );
}
