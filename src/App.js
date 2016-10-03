import React from 'react';
import ReactDOM from 'react-dom';
// import Home from "./home.jsx";
import ProductPage from './individual-product-page.js';
// import data from './data';
import Nav from './nav.js'; 
import Footer from './footer.js';



var App = React.createClass({
  render: function() {
    return (
      <div>
      	<Nav />
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
