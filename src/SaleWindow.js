import React from'react';


var SaleWindow = React.createClass({

	render: function() {

		return(
			
			<div className="sale-window">
					<p className="the-gatsby">The Gatsby</p>
					<p>Tortoise Collection</p>

				<div>
					<img className="sale-item-image" src="https://s21.postimg.org/ltla2mtlz/sale_item_glasses_tortoise.png" alt="sale item" />
				</div>

				<button type="button" className="btn btn-primary btn-md sale-button">
					SHOP
				</button>

			</div>
		)
	}
})


export default SaleWindow;