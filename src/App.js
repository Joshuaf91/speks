import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./home.jsx";
import './individual-product-page.js';
import data from './data';
import Nav from './nav'; 
import Footer from './footer';



var App = React.createClass({
  render: function() {
    return (
      <div>
        <Home />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
