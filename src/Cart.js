import React from 'react';
import data from './data.js';

var Cart = React.createClass ({
    getInitialState: function(){
        return ({products: [2,4,5,6,7]})
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
                <h1>Shopping Cart</h1>
                <hr />
                <ol>
                    {products}
                </ol>
                <hr />
                <h3 className="pull-right" id="totalPrice">Total Price: {this.state.total}</h3>
            </div>
        )
    }
})

export default Cart;