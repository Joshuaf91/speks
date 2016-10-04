import React from 'react'
import products from './data.js';

var CategoryPage = React.createClass({
	getInitialState:function(){
		return{display:null}
	},
	takeACLoserLook(event){
		console.log(event.target);
		console.log(event.target.src);
	},
	displayData: function(){
		console.log("params",this.props.params)
		console.log("products", products)
		
		var newArr = products.map((element,index) => {
			if(element.gender.indexOf(this.props.params.gender) > -1){
				return index
			}else{
				return undefined
			}
		});
		newArr = newArr.clean(undefined).map((element,index) => {
			if(products[element].material.indexOf(this.props.params.category) > -1){
				return <div key={'frames' + index} className='col-xs-6 col-md-6 col-xl-6 glassesImageDiv'>
							<h5 className='text-center'>{products[element].productName} | <em>{products[element].price}</em></h5>
							<img onClick={this.takeACLoserLook} className='img-responsive glassesImage' src={products[element].imgSrc[0]} alt="gaphas" />
				 </div>
			}else{
				if(this.props.params.category){
					return undefined;
				}else{
					return <div key={'frames' + index} className='col-xs-6 col-md-6 col-xl-6'>
								<h5 className='text-center'>{products[element].productName} | <em>{products[element].price}</em></h5>
								<img onClick={this.takeACLoserLook} className='img-responsive glassesImage' src={products[element].imgSrc[0]} alt="gaphas" />
					 </div>
				}
			}
		});
		newArr.clean(undefined);
		this.setState({display:newArr});
	},
	componentWillReceiveProps:function(){
		console.log("componentWillReceiveProps")
		this.displayData();
	},
	componentWillMount:function(){
		this.displayData();
	},
	render(){
		console.log("display",this.state.display);
			return(
					<div>
							<div className='container-fluid'>
								<div className='col-xs-2 col-md-2 col-xl-2'>
									<h5>Sort By:</h5>
									<ul>
										<li>Price</li>
										<li>Popularity</li>
									</ul>
								</div>
								<div className='col-xs-10 col-md-10 col-xl-10'>
									{this.state.display}
								</div>
							</div>
					</div>
				)
	}
})



export default CategoryPage;