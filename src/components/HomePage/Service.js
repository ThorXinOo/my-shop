/** @format */

import React, { Component } from 'react';
import { FaDolly, FaRedo, FaDollarSign } from 'react-icons/fa';
import styled from 'styled-components';

export default class Service extends Component {
  state = {
    services: [
      {
        id: 1,
        title: 'free shipping',
        icon: <FaDolly />,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis.',
      },
      {
        id: 2,
        title: '30 days return policy',
        icon: <FaRedo />,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis.',
      },
      {
        id: 3,
        title: 'secured payment',
        icon: <FaDollarSign />,
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, blanditiis.',
      },
    ],
  };
  render() {
    return (
      <ServiceWrapper className='py-5'>
        <div className='container'>
          <div className='row'>
            {this.state.services.map((service) => {
              return (
                <div
                  className='col-10 mx-auto col-md-4 col-sm-6 text-center my-3'
                  key={service.id}
                >
                  <div className='service-icon'>{service.icon}</div>
                  <div className='mt-3 text-capitalized'>{service.title}</div>
                  <div className='mt-3'>{service.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServiceWrapper>
    );
  }
}

const ServiceWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
