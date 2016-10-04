
import React from 'react';
import products from './data.js';
import {Modal} from 'react-bootstrap';


var ProductPage = React.createClass({
	addToCart(){
		var arr =[];
		arr.push(this.props.product[1])
		this.props.xButton();
	},

	render(){
		if (! this.props.product) { return null; }

		return(
			<div className="text-center">
				<div className='row'>
					<h3 className='col-xs-10'>{this.props.product[0].productName}</h3>
					<h3><button type="button" className="col-xs-1 btn btn-default btn-xs" onClick={this.props.xButton}>X</button></h3>
					<h3><p className="col-xs-1"></p></h3>
				</div>
				<div className='row'><img className='col-xs-12' src={this.props.product[0].imgSrc[0]} alt="#"/></div>
				<div className='row'>
					<div className='col-sm-7'><h5>Description</h5> {this.props.product[0].description}</div>						
					<div className='col-sm-5'><h5>Price </h5>
											{this.props.product[0].price}<br /><br /> 
											<button type="button" className="btn btn-default btn-lg" onClick={this.addToCart}>Add to cart</button>
					</div>				
				</div>
			</div>
		)
	}
});

export default ProductPage;