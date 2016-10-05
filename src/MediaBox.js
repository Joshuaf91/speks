import React from'react';


var MediaBox = React.createClass({

	render: function() {
		return(
			<div className="video-container">
				<div className="youtube-video">
					<iframe width="100%" height="auto" src="https://www.youtube.com/embed/if43-ue6azM?rel=0" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
		)
	}
});

export default MediaBox;


