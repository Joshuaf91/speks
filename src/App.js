import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import ProductPage from './individual-product-page.js';
import Home from "./Home.jsx";
import Nav from './nav'; 
import Footer from './footer';
import CategoryPage from'./categoryPage'



var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Nav />
        <CategoryPage />
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
