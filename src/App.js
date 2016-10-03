import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route} from 'react-router';
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
        {this.props.children}
        <Footer/>
        <ProductPage/>
      </div>
    )
  }
})

ReactDOM.render(
  <Router>
    <Router path="/" component={App}>
      <IndexRoute component={Home}/>
    </Router>
  </Router>,
  document.getElementById('root')
);
