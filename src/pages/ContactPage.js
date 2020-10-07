/** @format */

import React from 'react';
import Hero from '../components/Hero';
import Title from '../components/Title';
import ContactBcg from '../images/contactBcg.jpeg';
import Contact from '../components/ContactPage/Contact';

export default function ContactPage() {
  return (
    <>
      <Hero img={ContactBcg}>Hello From Contact Page</Hero>
      <Contact />
    </>
  );
}
