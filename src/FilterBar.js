import React from'react';
import {Link} from 'react-router';

var FilterBar = React.createClass({

	render: function() {
	console.log("	a;ldksgaskln;laskdgnasdl;kgnslkdgn" + this.props.filterColor)
		return(

			<div id={this.props.filterColor} className="container-nav">

				<div id="nav-metal" className="nav-text">
					<Link to="CategoryPage/n">METAL</Link>
				</div>

				<div id="nav-plastic" className="nav-text">
					<Link to="CategoryPage/w">PLASTIC</Link>
				</div>

				<div id="nav-wood" className="nav-text">
					<Link to="CategoryPage/m">WOOD</Link>
				</div>

				<div id="nav-tortoise" className="nav-text">
					<Link to="CategoryPage/m">TORTOISE</Link>
				</div>

				<div id="nav-multicolor" className="nav-text">
					<Link to="CategoryPage/m">MULTICOLOR</Link>
				</div>

			</div> 

		)
	}
})


export default FilterBar;

