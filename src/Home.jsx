import React from 'react';


var Home = React.createClass({
  render: function() {
    return (
      <div>
        HEAD
      	<h1 className="text-center">HEADER</h1>
        <h1 className="text-center"> speks </h1>  
        <div className="row">
            <div className="col-xs-12">
                <img src="https://i.warbycdn.com/v/c/assets/eyeglasses-sunglasses/image/Fall-2016-eyeglasses-desktop/0/1a50f7bdf7.jpg?quality=80&width=1300" alt="Speks"/> 
            </div>
        </div>    
        <img id="home-image" src="https://i.warbycdn.com/v/c/assets/eyeglasses-sunglasses/image/Fall-2016-eyeglasses-desktop/0/1a50f7bdf7.jpg?quality=80&width=1300" alt="Speks"/>
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