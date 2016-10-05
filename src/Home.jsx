import React from 'react';
import SaleWindow from './SaleWindow';
import Cart from './Cart';
import Footer from './footer';

var Home = React.createClass({
  render: function() {
    return (
      <div>

     	  <div className="container-home">
     		 
          <div id="home-background-web">
     			  <img className="background-large" src="https://s21.postimg.org/4c8wisz2v/speks_opening_image_xl.jpg" alt="background" />
     		   </div>

       		<div id="home-background-mobile">
       			<img className="background-small" src="https://s16.postimg.org/hcf89wv2t/speks_opening_image_mobile.png" alt="background" />
       		</div>

     	  </div>

          <div id="sale-window">
            <SaleWindow />
          </div>
      </div>

    )
  }
})

export default Home;