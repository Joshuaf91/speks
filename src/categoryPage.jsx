import React from 'react'
import products from './data.js';

var CategoryPage = React.createClass({

	render(){
		var newArr = products.map((val,i) => {
			console.log(val);
			if(val.gender.indexOf(this.props.params.gender) > -1){
				return <div className='col-md-5'>{val.gender +
												//val.material+
												val.productName +
												val.price+
												val.color+
												//val.description +
												<img src={val.imgSrc} />}
						</div>
			}else{
				return undefined
			}
			// this.props.params.category
		})
		console.log(newArr);

			return(
					<div>
							<div className='row'>
								<div className='col-xs-2'>
									<h5>Sort By:</h5>
									<ul>
										<li>Price</li>
										<li>Popularity</li>
									</ul>
								</div>
								{newArr}
							</div>
					</div>
				)
	}
})



export default CategoryPage;