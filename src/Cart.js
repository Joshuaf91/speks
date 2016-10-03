import React from 'react';
import products from './data.js';

var ShoppingCart = React.createClass({
    getInitialState: function () {
    return {data: null}
    },
    /* on click "add to cart" add item to cart */
    /* .push() item // name & price (img optional) */
    /* on remove, remove item from cart & update price */ 
    render: function() {
        return (
            <div>
                <p>
                    <button type="button" className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
                    </button>
                </p>
                <h3>{products.productName}</h3>
                <img src={products.imgSrc} alt="#"/>
                <button>Price</button>
            </div>
        )
    }
})

export default Cart;