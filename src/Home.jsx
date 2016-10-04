import React from 'react';
import Cart from './Cart.js';

var Home = React.createClass({
  render: function() {
    return (
      <div>
<<<<<<< HEAD
     	<div className="container-home">
     		<div id="home-background-web">
     			<img className="background-large" src="https://s21.postimg.org/4c8wisz2v/speks_opening_image_xl.jpg" alt="background" />
     		</div>

     		<div id="home-background-mobile">
     			<img className="background-small" src="https://s16.postimg.org/hcf89wv2t/speks_opening_image_mobile.png" alt="background" />
     		</div>
     	</div>
=======
      	<Cart />
      	<button type="submit">Add to Cart</button>
        <img id="home-image" src="https://i.warbycdn.com/v/c/assets/eyeglasses-sunglasses/image/Fall-2016-eyeglasses-desktop/0/1a50f7bdf7.jpg?quality=80&width=1300" alt="Speks"/>
>>>>>>> 4ccde78b8736e22303d26a3ccd2bb9f371c6dee2
      </div>
    )
  }
})

export default Home;