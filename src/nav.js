import React from'react';
import {Link} from 'react-router';

var Nav = React.createClass({
	
	render: function() {
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
								<Link to="CategoryPage/n" className="nav-non-binary">
									Non-Binary
								</Link>
							</li>

							<li>
								<Link to="CategoryPage/w"className="nav-women">
									Women
								</Link>
							</li>

							<li>
								<Link to="CategoryPage/m" className="nav-men">
									Men
								</Link>
							</li>

						</ul>
					</div>
				</nav>

				<div className="container-fluid">
					<div className="row second-nav-bar">

						<div className="col-lg-1 non-binary-nav-bar-metal">
	  						METAL
	  					</div>

	  					<div className="col-lg-1 non-binary-nav-bar-plastic">
	  						PLASTIC
	  					</div>

	  					<div className="col-lg-1 non-binary-nav-bar-wood">
	  						WOOD
  						</div>

  						<div className="col-lg-1 non-binary-nav-bar-tortoiseshell">
	  						TORTOISE
  						</div>

  						<div className="col-lg-1 non-binary-nav-bar-multicolor">
	  						MULTICOLOR
  						</div>

					</div>
				</div>
			</div>
		)
	}
});

export default Nav;