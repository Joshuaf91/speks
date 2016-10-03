import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home.jsx";
import Nav from './nav'; 
import Footer from './footer';
// import './individual-product-page.js';




var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Nav />
        <Home />
        <Footer/>
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
