import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'React-Router';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProductPage from './individual-product-page.js';
import Home from "./Home.jsx";
import Nav from './nav'; 
import Footer from './footer';



var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Nav />
        <Home />
        <Footer/>
        <ProductPage/>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
