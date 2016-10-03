import React from 'react';
import products from './data.js';

var ProductPage = React.createClass({
	// getInitialState(){
	// 	return{
	// 	}
	// }

	render(){
		return(
			<div>
				<h3>{products[0].productName}</h3>
				<img src={products[0].imgSrc[0]} alt="#"/>
				<button>Details</button>
				<button>Price</button>
			</div>
		)
	}
});

export default ProductPage;