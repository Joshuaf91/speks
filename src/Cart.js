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
        var products = this.state.products.map(function(element){
            return (<li>{data[element].productName} - {data[element].price}</li>)
        })
        return (
            <div>
                <ul>
                    {products}
                </ul>
            </div>
        )
    }
})

export default Cart;