import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProductPage from './individual-product-page.js';
import Home from "./Home.jsx";
import Nav from './nav'; 
import Footer from './footer';
import CategoryPage from'./categoryPage';
import NewNav from './NewNav';
import SaleWindow from './SaleWindow';



var App = React.createClass({
  render: function() {
    return (
      <div id="app-width">
      	<div id="app-nav">
          <NewNav />
        </div>
        
        <div id="app-home">
          {this.props.children}
        </div>

        <div id="sale-window">
          <SaleWindow />
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Router path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/CategoryPage/:gender(/:category)" component={CategoryPage}/>
    </Router>
  </Router>,
  document.getElementById('root')
);
