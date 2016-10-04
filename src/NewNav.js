import React from'react';
import {Link} from 'react-router';

var NewNav = React.createClass({
	getInitialState:function(){
		return({gender: null})
	},
	linkClick: function(gender, event){
		//window.location() fix undefined on refresh
		this.setState({gender: gender})
	},
	render: function() {

		return(
		<div>
			<div className="container-nav">
				<div id="nav-logo">
					<div id="logo-white">
						<Link to="/"><img id="logo-web" src="https://s18.postimg.org/y9qq4rfop/speks_logo_large_white.png" alt="SPEKS" /></Link>
					</div>

					<div id="logo-black">
						<Link to="/"><img id="logo-mobile" src="https://s21.postimg.org/6zryreryv/speks_logo_large_black.png" alt="SPEKS" /></Link>
					</div>
				</div>

				<div id="nav-genderless" className="nav-text">
					<Link to="CategoryPage/n" onClick={this.linkClick.bind(this,"CategoryPage/n")}>GENDERLESS</Link>
				</div>

				<div id="nav-women" className="nav-text">
					<Link to="CategoryPage/w" onClick={this.linkClick.bind(this,"CategoryPage/w")}>WOMEN</Link>
				</div>

				<div id="nav-men" className="nav-text">
					<Link to="CategoryPage/m" onClick={this.linkClick.bind(this,"CategoryPage/m")}>MEN </Link>
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