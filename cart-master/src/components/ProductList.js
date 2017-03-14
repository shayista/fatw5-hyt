import React, { Component } from 'react';

import ProductItem from './ProductItem';

import product1 from "../assets/images/productbig.png";
import arrow from "../assets/images/arrow.png";
import product7 from "../assets/images/product7.png";
import barcode from "../assets/images/barcode.gif";

//import { getFilteredProducts } from '../helper';

class ProductList extends Component {

  render() {
    const { products } = this.props

    const allProducts = products.products
  
    return (
      <section className="main">

        
 <div className="banner">
        <img className="bigProduct" src={product1}/>
        <div className="special">
            <p className="spl">Special Offer! </p>
            <p className="ipad">iNeed the iPad</p>
            <button className="details">details</button>
        </div>
    </div>
    <div className="featured">
        <img src={arrow} className="arrow" />
        <p className="featuredBanner">featured products</p>
    </div>
    
        
          <ul className="list-of-products">
            {
              allProducts
              .map(prod => {
                // Get ID from image name, other properties are not unique in given data set

                prod.prodId = prod.image.split('.')[0];
                return <ProductItem key={prod.prodId} product={prod} addToCart={this.props.addToCart} addToFav={this.props.addToFav}/>
             })
           }
          </ul>


    <div className="deal">
        <div className="dealImg">


            <p className="dealText">Deal</p>
            <p className="dealText1">of the day</p>
            <span className="dealProduct">
             <img src={barcode} className="barcode"/>
                <p className="title1">samsung-hmx-h105-ssd-camcoder</p>
             <img src={product7}/> 
                <p className="Price1">Price :<span className="cost">$158.00</span></p>
            </span>
        </div>
    </div>
     
      </section>
    )
  }
}

// context level router access globally to make use of router object
ProductList.contextTypes = {
  router: React.PropTypes.object
}

export default ProductList;
