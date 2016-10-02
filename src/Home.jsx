import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

var Home = React.createClass({
  render: function() {
    return (
      <div>
      	<h1 className="text-center">HEADER</h1>
      	<hr />
        <h1 className="text-center"> speks </h1> {/* In terms of design, I wasn't sure wether the name would go in the header or below it */}
        <img src="https://i.warbycdn.com/v/c/assets/eyeglasses-sunglasses/image/Fall-2016-eyeglasses-desktop/0/1a50f7bdf7.jpg?quality=80&width=1300" alt="Speks"/> {/* I really wanted for this to be a slider & not just a singular image, still working on figuring out the slider, if any one knows how to do so it would be helpful, until then I'll keep working on it!*/}
        <h3>Product</h3>
        	<div className='row'>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" /> 
        			<p className="text-center">Description - Price</p>
        		</div>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        	</div>
        	<div className='row'>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        	</div>
        	<div className='row'>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        		<div className='col-xs-4'>
        			<img src="http://static.zennioptical.com/image/common/WomensGlassesdropdown.jpg" alt="Glasses" />
        			<p className="text-center">Description - Price</p>
        		</div>
        	</div>
        	
        <hr />
        <h1 className="text-center">FOOTER</h1>
      </div>
    )
  }
})

export default Home;