import React from'react';
import {Link} from 'react-router';

var SaleWindow = React.createClass({

	render: function() {

		return(
			
			<div>
				<div>
					<p className="sale-item-text">The Gatsby</p>
					<p className="sale-item-text">Tortoise Collection</p>
				</div>

				<div>
					<img className="sale-item-image" src="https://s21.postimg.org/ltla2mtlz/sale_item_glasses_tortoise.png" alt="sale item" />
				</div>

			</div>
		)
	}
})


export default SaleWindow;