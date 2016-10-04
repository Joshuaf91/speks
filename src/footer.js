import React from'react';


var Footer = React.createClass({

	render: function() {
		return(
			<footer className="footer" id="footer-position">
				<div className="container">
        			<div className="row">
  					
	  					<div className="col-xs-4">
	  						Follow Us On Twitter!
	  					</div>

	  					<div className="col-xs-4">
	  						&copy; SPEKS 2015 - {new Date().getFullYear()}
	  					</div>

	  					<div className="col-xs-4">
	  						Subscribe To Our Mailing List
  						</div>
  						
  					</div>
				</div>
			</footer>
		)
	}
});

export default Footer;