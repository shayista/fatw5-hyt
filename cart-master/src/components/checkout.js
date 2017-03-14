import React from "react";
import { browserHistory } from "react-router";
import checkout from "../assets/images/checkout.gif";

export class Checkout extends React.Component {
	onNavigateHome() {
		browserHistory.push("/");
	}
	render() {
		return (
			<div className="checkout-info">
				<p className="checkout-text-one">Thank you for Shopping with CI eZ Deals</p>
				<p className="checkout-text-two">Your order number is <span className="order-num">000123</span></p>
				<button className="checkout-button" onClick={this.onNavigateHome}>
				<span className="checkout-arrow">
				<img src={checkout}/>
				</span>
				<span className="checkout-btn-text">Want to go for New Shopping</span></button>
			</div>
		)
	}
}
