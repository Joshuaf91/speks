import React from 'react'
import products from './data.js';

var CategoryPage = React.createClass({

	render(){

	var newArr = products.map((element,index) => {
		if(element.gender.indexOf(this.props.params.gender) > -1){
			return index
		}else{
			return undefined
		}
	});
	if (this.props.params.category) {
		newArr = newArr.clean(undefined).map((element,index) => {
			if(element.material.indexOf(this.props.params.gender) > -1){
				return <div className='col-md-5'> 		
							<h5>{val.productName}</h5> +
							val.price+
							val.color+
							<img src={val.imgSrc} />

				</div>
			}else{
				return <div className='col-md-5'> </div>
			}
		})
	} else {}
		console.log(this.props.params);
			return(
					<div>
							<div className='container-fluid'>
								<div className='col-xs-2'>
									<h5>Sort By:</h5>
									<ul>
										<li>Price</li>
										<li>Popularity</li>
									</ul>
								</div>
								<div className='col-md-10'>
									{newArr}
								</div>
							</div>
					</div>
				)
	}
})



export default CategoryPage;