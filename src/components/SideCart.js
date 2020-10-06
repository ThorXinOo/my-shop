/** @format */

import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default function SideCart() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart } = value;
        // console.log('some');
        return (
          <SideCartWrapper show={cartOpen} onClick={closeCart}>
            <p>Cart Items</p>
          </SideCartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const SideCartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
