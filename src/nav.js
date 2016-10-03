import React from'react';

var Nav = React.createClass({
	
	render: function() {
		return(
			<div>
				<nav className="navbar navbar-default">
					<div className="container-fluid" >
						
						<div className="navbar-header">
							<a className="navbar-brand nav-logo" href="#">
								SPEKS
							</a>
						</div>

						<ul className="nav navbar-nav">

							<li>
								<a className="nav-non-binary" href="#">
									Non-Binary
								</a>
							</li>

							<li>
								<a className="nav-women" href="#">
									Women
								</a>
							</li>

							<li>
								<a className="nav-men" href="#">
									Men
								</a>
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