import React, { Component } from 'react';
import {browserHistory} from "react-router";
import ProductItem from './ProductItem';
import { getProductDetails } from '../helper';
import { getProductDetailsPrice } from '../helper';
import arrow from "../assets/images/arrow.png";

class Cart extends Component {
   
 onNavigateHome() {
    browserHistory.push("/");
  }
  onNavigateCheckout() {
    browserHistory.push("/checkout");
  }

  render() {
    const { cart } = this.props;
     
    return (
      <section className="main">

        <div className="cart">

          <h2 className="Main"><img src={arrow} className="arrowMain"/>Cart</h2>
          
        
          <ul className="list-of-products">
            {
             
             
              Object.keys(cart)
              .map(key => {
                // Get ID from image name, other properties are not unique in given data set
                var prod = getProductDetails(this.props.products.products, key);
                var price = getProductDetailsPrice(this.props.products.products, key)
                prod.prodId = prod.image.split('.')[0];
                prod.pricecart = price.price;
                const totalCount = cart[key] ;
                
                const totalPrice=( +(prod.pricecart.slice(1)*totalCount) ) ;

                return <ProductItem key={prod.prodId} product={prod} addToCart={this.props.addToCart} count={totalCount} totalPrice={totalPrice} isCart={true}/>
              })
            }


          </ul>

        </div>
      
       <div className="cartButton">
        <button onClick={this.onNavigateHome} className="btn btn-primary">continue shopping</button>
        <button onClick={this.onNavigateCheckout} className="btn btn-primary">confirm order</button>
        </div>
      </section>
    )
  }
}

export default Cart;
