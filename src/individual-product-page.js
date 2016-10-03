import React from 'react';
import products from './data';

var ProductPage = React.createClass({

	render(){
		console.log(products)
		return(
			<div>
				<h3>{products.productName}</h3>
				<img src={products.imgSrc} alt="#"/>
				<button>Details</button>
				<button>Price</button>
			</div>
		)
	}
});

export default ProductPage;