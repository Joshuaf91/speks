import React from 'react';


//props.product is an array where the first item is an object from data.js and the second index is the index of the first item within data.js
var ProductPage = React.createClass({
	getInitialState(){
		return{value:1}
	},
	addToCart(){
		var arr = [];
		for (var i = 0; i < this.state.value; i++) {
			arr = [...arr, this.props.product[1]];
		}
		this.props.changeCart(arr);
		this.props.xButton();
	},
	selectValue(event){
		this.setState({value:event.target.value});
	},
	render(){
		if (! this.props.product) { return null; }
			//content inside modal, based on onClick event listener
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
					<div className='col-sm-5'><h5>Price </h5> <br />
											{this.props.product[0].price} <span> </span>
										
												 <select onChange={this.selectValue}>
												 	<option value='1' >1</option>
												 	<option value='2' >2</option>
												 	<option value='3' >3</option>
												 	<option value='4' >4</option>
												 	<option value='5' >5</option>
												 </select>
											  <br /> <br />
											<button type="button" className="btn btn-default btn-md" onClick={this.addToCart}>Add to cart</button>
					</div>				
				</div>
			</div>
		)
	}
});

export default ProductPage;