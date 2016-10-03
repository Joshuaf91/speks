import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProductPage from './individual-product-page.js';
import Home from "./Home.jsx";
import Nav from './nav'; 
import Footer from './footer';
import CategoryPage from'./categoryPage'
<<<<<<< HEAD
=======


>>>>>>> a174d98e118cc6f76531eb457d9d5a6ede91d76c

var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Nav />
        {this.props.children}
        <Footer/>
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
