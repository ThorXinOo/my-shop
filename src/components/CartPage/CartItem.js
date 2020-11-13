/** @format */

import React from 'react';
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from 'react-icons/fa';

export default function CartItem({
  cartItem,
  removeitem,
  increment,
  decrement,
}) {
  const { id, title, image, price, company, count, total } = cartItem;
  return (
    <div className='row text-capatilize mt-5 mt-lg-0 text-center align-items-center'>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <img src={image} width='60' alt='' className='img-fluid' />
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>Product:</span>
        {title}
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <span className='d-lg-none'>Price:</span>
        {price}
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <div className='d-flex justify-content-center'>
          <div>
            <FaChevronCircleDown
              className='cart-icon text-primary'
              onClick={() => decrement(id)}
            ></FaChevronCircleDown>
            <span className='mx-3 text-title text-muted'>{count}</span>
            <FaChevronCircleUp
              className='text-primary'
              onClick={() => increment(id)}
            ></FaChevronCircleUp>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2'>
        <FaTrash
          className='text-danger cart-icon'
          onClick={() => removeitem(id)}
        ></FaTrash>
      </div>
      <div className='col-10 mx-auto col-lg-2 pb-2'>
        <strong className='text-muted'>item total :</strong>${total}
      </div>
    </div>
  );
}
