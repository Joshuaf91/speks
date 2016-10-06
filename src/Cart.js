import React from 'react';
import data from './data.js';

var Cart = React.createClass ({
    getInitialState: function(){
        return ({products: this.props.cart})
    },
    removeItem: function(e, productsName){
        var productsIndex;
        this.state.products.some(function(products, index){
            if(products.productName == productsName){
                productsIndex = index;
                return true;
            }
        })
        if(typeof productsName !== 'undefined'){
            this.state.products.splice(productsIndex, 1)
        }
    },
    totalPrice: function(){
        var total = 0;
        this.state.products.forEach(function(item, index){
            total += data.price
        })
        console.log(total);
        this.setState({total : total})
    },

    render: function() {
        console.log(this.state.products)
        var products = this.state.products.map(function(element){
            return ( 
                    <div className="container-fluid text-center">
                        <div className="row">
                            <div className="col-xs-3">
                                <img src={data[element].imgSrc[0]} alt="Product" height="50px" />
                            </div>
                            <div className="col-xs-3">
                                {data[element].productName}
                            </div>
                            <div className="col-xs-3">
                                ${data[element].price}
                            </div>
                            <div className="col-xs-3">
                                <button className="btn btn-default"type="button" >Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })
        return (
            <div>
               

                    <div id="home-background-web">
                                <img id="category-header-web" src="https://s13.postimg.org/lqc6hrm7r/cart_header_web.jpg" alt="category" />
                            </div>

                            <div id="home-background-mobile">
                                <img id="category-header-web" src="https://s9.postimg.org/do71kunen/cart_header_mobile.jpg" alt="category" />
                            </div>

                <h1>Shopping Cart</h1>
                <hr />
                    {products}

                <hr />
                <h3 className="pull-right" id="totalPrice">Total Price: {this.state.total}</h3>
            </div>
        )
    }
})

export default Cart;