var React = require('react');
import 'bootstrap/dist/css/bootstrap.css';

var Footer = React.createClass({

	render: function() {
		return(
			<div>
        		<div class="row">
  					<div class="col-sm-4">COLUMN 1 TEST</div>
  					<div class="col-sm-4">COLUMN 2 TEST</div>
  					<div class="col-sm-4">COLUMN 3 TEST</div>
				</div>
			</div>
		)
	}
});

export default Footer;