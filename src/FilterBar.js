import React from'react';
import {Link} from 'react-router';

var FilterBar = React.createClass({

	render: function() {
		return(

			<div id={this.props.filterColor} className="container-nav">

				<div id="nav-metal" className="nav-text">
					<Link to={"CategoryPage/"+ this.props.gender+"/Metal"}>METAL</Link>
				</div>

				<div id="nav-plastic" className="nav-text">
					<Link to={"CategoryPage/" + this.props.gender+"/Plastic"}>PLASTIC</Link>
				</div>

				<div id="nav-wood" className="nav-text">
					<Link to={"CategoryPage/"+ this.props.gender+"/Wood"}>WOOD</Link>
				</div>

				<div id="nav-tortoise" className="nav-text">
					<Link to={"CategoryPage/"+ this.props.gender+"/Tortoise"}>TORTOISE</Link>
				</div>

				<div id="nav-multicolor" className="nav-text">
					<Link to={"CategoryPage/"+ this.props.gender+"/Multicolor"}>MULTICOLOR</Link>
				</div>

			</div> 

		)
	}
})


export default FilterBar;

