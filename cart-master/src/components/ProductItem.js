import React, { Component } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import $ from "jquery";
import { findDOMNode } from "react-dom"; 

class ProductItem extends Component {
  

  render() {
       const { product } = this.props
  
const tooltip = (
  <Tooltip id="tooltip"><strong >Product Deatails</strong> {product.tooltip}</Tooltip>
);


 
    return (
     <div className="itemContainer">
      <li className="boxContainer">
      <div className="inner">
          <p className="title"> {product.name}</p>
          <OverlayTrigger placement="top" overlay={tooltip}>
            <img src={require(`../assets/images/${product.image}`)} alt={product.name} width="150px" height="150px"/> 
          </OverlayTrigger>
            
               
              <p className="Price"> Price:<span className="cost">{product.price}</span> </p>
             
            {this.props.isCart ? <div><h5> QuantityS {this.props.count} </h5>Total Cost ${this.props.totalPrice}</div> :
            <div> <div id={product.prodId} className="addToCartBtn" onClick={this.props.addToCart}>
            Buy now!</div></div>}
      
            {this.props.isFav ? <h5> Remove</h5> :
            <div> <div className="addToFavBtn"  id={product.prodId} 
            onClick={this.props.addToFav}>Add to favourites</div></div>}

   
        </div>

      </li>


 </div>
    )
  }
}

export default ProductItem
