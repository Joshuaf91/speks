import React from'react';


var Footer = React.createClass({

	render: function() {
		return(
			<div>
				<div className="row">
				  
				  <div className="col-sm-4 video-box">
				  	<iframe max-width="auto" height="170px" src="https://www.youtube.com/embed/if43-ue6azM?rel=0" frameborder="0" allowfullscreen></iframe>
				  </div>
				  
				  <div className="col-sm-4">
				  	<div className="cream-box">
				  		<p>CONTACT</p>
				  		<p>FAQ</p>
				  		<p>CAREERS</p>
				  		<p>SITEMAP</p>
				  		<p>MISSION STATEMENT</p>
				  	</div>
				  </div>
				  
				  <div className="col-sm-4">
				  		<div className="cream-box-social">	
				  			<p><i className="fa fa-twitter"></i> <span className="cream-box">TWITTER</span></p>
				  			<p><i className="fa fa-facebook"></i> <span className="cream-box">FACEBOOK</span> </p>
				  			<p><i className="fa fa-instagram"></i> <span className="cream-box">INSTAGRAM</span> </p>
				  			<p><i className="fa fa-pinterest"></i> <span className="cream-box">PINTEREST</span> </p>
				  		</div>
				  </div>

				</div>
			</div>
		)
	}
});

export default Footer;