/** @format */

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Contact from './pages/ContactPage';
import Default from './pages/DefaultPage';
import Home from './pages/HomePage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/default' component={Default}></Route>
        <Route exact path='/products' component={Products}></Route>
        <Route exact path='/products/:id' component={SingleProduct}></Route>
      </Switch>
    </>
  );
}
export default App;
