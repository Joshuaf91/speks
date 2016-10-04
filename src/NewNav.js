import React from'react';
import {Link} from 'react-router';

var NewNav = React.createClass({

	render: function() {

		return(
		<div>
			<div className="container-nav">
				<div id="nav-logo">
					<div id="logo-white">
						<img id="logo-web" src="https://s18.postimg.org/y9qq4rfop/speks_logo_large_white.png" alt="SPEKS" />
					</div>

					<div id="logo-black">
						<img id="logo-mobile" src="https://s21.postimg.org/6zryreryv/speks_logo_large_black.png" alt="SPEKS" />
					</div>
				</div>

				<div id="nav-genderless" className="nav-text">
					GENDERLESS 
				</div>

				<div id="nav-women" className="nav-text">
					WOMEN
				</div>

				<div id="nav-men" className="nav-text">
					MEN 
				</div>

				<div id="nav-cart" className="nav-text">
					
					<div id="nav-cart-word">
					 CART
					</div>

					<div id="nav-cart-icon">
						<i className="icon fa fa-shopping-cart"></i> 
					</div>
				</div>
			</div> 
		</div> 
		)
	}
})


export default NewNav;