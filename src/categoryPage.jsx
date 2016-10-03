import React from 'react'
import products from './data.js';

var CategoryPage = React.createClass({
	render(){
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
								<div className='col-md-5'></div>
								<div className='col-md-5'></div>
							</div>
					</div>
				)
	}
})



export default CategoryPage;