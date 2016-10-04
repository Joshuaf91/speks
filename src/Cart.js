import React from 'react';
import products from './data.js';

var CartList = React.createClass({
    render: function() {
        return (
            <div>
                Hello World
            </div>
        )
    }
})

var Cart = React.createClass ({
    getInitialState: function(){
        return (
            <div>
                products: [],
                total: 0,
                currency: 'USD'
            </div>
        )
    },
    addItem: function(e, products){
        this.state.products.push(products);
        this.totalPrice();
    },
    removeItem: function(e, productsName){
        var productsIndex;
        this.state.products.some(function(products,index){
            if(products.productName == productsName){
                productsIndex = index;
                return true;
            }
        })
        if(typeof productsName != 'undefined'){
            this.state.products.splice(productsIndex, 1)
        }
    },
    totalPrice: function(){
        var total = 0;
        this.state.products.forEach(function(item, index){
            total += products.price
        })
        this.setState({total : total})
    },
    render: function() {
        var products = this.state.products.map(function(products){
            return (
                <div>
                    <li key={products.name}> {/* Would prefer to use ID instead of name*/}
                        <span>{products.price}</span>
                        <CartList />
                    </li>
                </div>
            )
        })
    }
})

export default Cart;