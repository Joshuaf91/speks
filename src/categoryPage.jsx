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
		newArr = newArr.clean(undefined).map((element,index) => {
			if(products[element].material.indexOf(this.props.params.gender) > -1){
				return <div className='col-md-5'></div>
			}else{
				return <div className='col-md-5'><img src={products[element].imgSrc[0]} alt="gaphas" /></div>
			}
		});
		console.log(newArr);
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
									{newArr}
								</div>
							</div>
					</div>
				)
	}
})



export default CategoryPage;