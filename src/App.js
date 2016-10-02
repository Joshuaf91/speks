import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./home.jsx";
import './individual-product-page.js';
import data from './data';
import Nav from './Nav'; 
import Footer from './Footer';



var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Nav />
        <Home />
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
