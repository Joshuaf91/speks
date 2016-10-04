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
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/CategoryPage/:gender(/:category)" component={CategoryPage}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
