/** @format */

import React from 'react';
import Title from '../components/Title';
import Info from '../components/AboutPage/Info';
import Hero from '../components/Hero';
import aboutBcg from '../images/aboutBcg.jpeg';

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg}></Hero>
      <Info />
    </>
  );
}
