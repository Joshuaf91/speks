import React from'react';
import {Link} from 'react-router';

var Nav = React.createClass({
	getInitialState:function(){
		return({gender: null})
	},
	linkClick: function(gender, event){
		this.setState({gender: gender})
	},
	render: function() {
		var gender = this.state.gender ? this.state.gender : "undefined";
		return(
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid" >
						
						<div className="navbar-header">
							<Link to="/" className="navbar-brand nav-logo">
								SPEKS
							</Link>
						</div>

						<ul className="nav navbar-nav">

							<li>
								<Link to="CategoryPage/n" onClick={this.linkClick.bind(this,"CategoryPage/n")} className="nav-non-binary">
									Non-Binary
								</Link>
							</li>

							<li>
								<Link to="CategoryPage/w" onClick={this.linkClick.bind(this,"CategoryPage/w")} className="nav-women">
									Women
								</Link>
							</li>

							<li>
								<Link to="CategoryPage/m" onClick={this.linkClick.bind(this,"CategoryPage/m")} className="nav-men">
									Men
								</Link>
							</li>

						</ul>
					</div>
				</nav>

				<div className="container-fluid">
					<div className="row second-nav-bar">

						<div className="col-lg-1 non-binary-nav-bar-metal">
	  						<Link to={gender + '/Metal"'} > METAL </Link></div>

	  					<div className="col-lg-1 non-binary-nav-bar-plastic">
	  						<Link to={gender + '/Plastic"'} >PLASTIC </Link>
	  					</div>

	  					<div className="col-lg-1 non-binary-nav-bar-wood">
	  						<Link to={gender + '/Wood"'} >WOOD</Link>
  						</div>

  						<div className="col-lg-1 non-binary-nav-bar-tortoiseshell">
	  						<Link to={gender + '/Tortoise"'} >TORTOISE</Link>
  						</div>

  						<div className="col-lg-1 non-binary-nav-bar-multicolor">
	  						<Link to={gender + 'Multicolor'} >MULTICOLOR</Link>
  						</div>

					</div>
				</div>
				<div>
				{this.props.children}
				</div>
			</div>

		)
	}
});

export default Nav;