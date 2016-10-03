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
				<h3>{products.productName}</h3>
				<img src={products.imgSrc}/>
				<button>Details</button>
				<button>Price</button>
			</div>
		)
	}
});

export default ProductPage;