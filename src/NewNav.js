import React from'react';
import {Link} from 'react-router';

var NewNav = React.createClass({
	getInitialState:function(){
		return({gender: null})
	},
	linkClick: function(gender, event){
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

				<div id="nav-genderless" className="nav-text" onClick={this.props.goToCategoryPage.bind(this.props.that,'n')}>
					GENDERLESS
				</div>

				<div id="nav-women" className="nav-text" onClick={this.props.goToCategoryPage.bind(this.props.that,'w')}>
					WOMEN
				</div>

				<div id="nav-men" className="nav-text" onClick={this.props.goToCategoryPage.bind(this.props.that, 'm')}>
					MEN
				</div>

				<div id="nav-cart" className="nav-text">
					
					<div id="nav-cart-word" onClick={this.props.goToCart}>
					 CART
					</div>

					<div id="nav-cart-icon" onClick={this.props.goToCart}>
						<i className="icon fa fa-shopping-cart"></i> 
					</div>
				</div>
			</div> 
		</div> 
		)
	}
})


export default NewNav;