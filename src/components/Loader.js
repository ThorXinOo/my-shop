/** @format */

import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = (props) => (
  <ContentLoader viewBox='0 0 400 300' {...props}>
    <rect x='0' y='0' rx='2' ry='2' width='400' height='400' />
    {/* <rect x='140' y='10' rx='2' ry='2' width='126' height='150px' />
    <rect x='280' y='10' rx='2' ry='2' width='126' height='150px' />
    <rect x='0' y='170' rx='2' ry='2' width='126' height='150px' />
    <rect x='140' y='170' rx='2' ry='2' width='126' height='150px' />
    <rect x='280' y='170' rx='2' ry='2' width='126' height='150px' /> */}
  </ContentLoader>
);

Loader.metadata = {
  name: 'DaniloWoz',
  github: 'danilowoz',
  description: 'Instagram style',
  filename: 'Instagram',
};

export default Loader;
