import React from 'react';
import products from './data.js';
import 'bootstrap/dist/css/bootstrap.css';


var ProductPage = React.createClass({
	getInitialState(){
		return{
			products: products,
			heading:products[0][0].productName,
			picture: products[0][0].imgSrc[0],
			details: products[0][0].description,
			price: products[0][0].price
		}
	},

	render(){
		return(
			<div>
				<div className='row'><h3 className='col-xs-12'>{this.state.heading}</h3></div>
				<div className='row'><img className='col-xs-12' src={this.state.picture} alt="#"/></div>
				<div className='row'>
					<div className='col-sm-7'><p>Description {this.state.details}</p></div>						
					<div className='col-sm-5'><p>Price {this.state.price}</p></div>				
				</div>
			</div>
		)
	}
});

export default ProductPage;