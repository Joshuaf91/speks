import React from 'react';
import Cart from './Cart.js';

var Home = React.createClass({
  render: function() {
    return (
      <div>
      	<Cart />
      	<button type="submit">Add to Cart</button>
        <img id="home-image" src="https://i.warbycdn.com/v/c/assets/eyeglasses-sunglasses/image/Fall-2016-eyeglasses-desktop/0/1a50f7bdf7.jpg?quality=80&width=1300" alt="Speks"/>
      </div>
    )
  }
})

export default Home;