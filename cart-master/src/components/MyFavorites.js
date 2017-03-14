import React, { Component } from 'react';
import arrow from "../assets/images/arrow.png";
import ProductItem from './ProductItem';
import { getProductDetails } from '../helper';

class MyFavorites extends Component {
 


  render() {
    const { myfav } = this.props;
     
    return (
      <section className="main">
        <div className="cart">
          <h2 className="Main"><img src={arrow} className="arrowMain"/>favourites list</h2>
          
        
          <ul className="list-of-products">
            {
              Object.keys(myfav)
              .map(key => {
                // Get ID from image name, other properties are not unique in given data set
                let prod = getProductDetails(this.props.products.products, key);
               
                prod.prodId = prod.image.split('.')[0];
                const totalCount = myfav[key];
             
                return <ProductItem key={prod.prodId} product={prod} addToFav={this.props.addToFav} count={totalCount} isFav={true}/>
              })
            }


          </ul>

        </div>
       
        

      </section>
    )
  }
}

export default MyFavorites;
