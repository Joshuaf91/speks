import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, hashHistory} from 'react-router';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home.jsx";
import Nav from './nav'; 
import Footer from './footer';
import CategoryPage from'./categoryPage';
import NewNav from './NewNav';
import Cart from './Cart';

var App = React.createClass({
  getInitialState: function(){
    return{cart:[]}
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  goToCategoryPage:function(category){
    this.context.router.push("/CategoryPage/"+category)
  },
  changeGender:function(gender){
    this.setState({gender:gender});
  },
  goToCart:function(){
    this.context.router.push("/cart")
  },
  changeCart: function(index){
    debugger;
    var array = this.state.cart.concat(index);
    this.setState({cart:array});
  },
  render: function() {
    console.log("this is my cart",this.state.cart);
    return (
      <div id="app-width">
      	<div id="app-nav">
          <NewNav goToCategoryPage={this.goToCategoryPage} goToCart={this.goToCart} that={this} />
        </div>
        
        <div id="app-home">
          {React.cloneElement(this.props.children, {
              cart: this.state.cart,
              changeCart: this.changeCart,
            })}
        </div>

        <div id="footer">
          <Footer />
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/CategoryPage/:gender(/:category)" component={CategoryPage}/>
    <Route path="/cart" component={Cart}/>  
    </Route>
  </Router>,
  document.getElementById('root')
);
