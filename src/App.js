import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Footer from './footer';
import Data from './data';


var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
})

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root')
);
