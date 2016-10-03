import React from 'react';
import products from './data.js';
import 'bootstrap/dist/css/bootstrap.css';


var ProductPage = React.createClass({
	getInitialState(){
		return{
			products: products,
			heading:products[0][0].productName,
			picture: products[0][0].imgSrc[0]
		}
	},

	render(){
		return(
			<div>
				<h3>{this.state.heading}</h3>
				<img src={this.state.picture} alt="#"/>
				<button>Description</button>
				<button>Price</button>
			</div>
		)
	}
});

export default ProductPage;