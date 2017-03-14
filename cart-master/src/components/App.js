import React, { Component } from 'react';
import Header from './Header';

import products from '../data/products';
import arrow from '../assets/images/arrow.png';

//import Cart from './Cart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: products,
      cart: {},
      myfav:{}
    }
    this.addToCart = this.addToCart.bind(this)
    this.addToFav =this.addToFav.bind(this)
    
    // this.removeCart = this.removeCart.bind(this)
  }

  /*
    Handle add to cart
    - if product already exists - increment the quantity, else add product to cart
  */
  addToCart(e) {
      e.preventDefault();
      e.target.innerText = "Added to Cart!";

      const prodId = e.target.id;
      const cart = { ...this.state.cart };
      cart[prodId] = cart[prodId] + 1 || 1;
console.log( cart[prodId]);
 console.log(this.state.cart);
      this.setState({ cart });

  }

   addToFav(e) {
      e.preventDefault();
      e.target.innerText = "Added to favourites!";

      const prodId = e.target.id;
      const myfav = { ...this.state.myfav };
      myfav[prodId] = myfav[prodId] + 1 || 1;
console.log( myfav[prodId]);
 console.log(this.state.myfav);
      this.setState({ myfav });

  }
 
  

  render() {
    // Passing state from App to necessary components, can be accessible via props
    // Pass state + props + any methods
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child,
        {
          ...this.state,
          addToCart: this.addToCart,
          addToFav: this.addToFav
        })
    });

    return (
      <div className="wrapper">
        <Header />
        <aside className="aside">
          <article>
          <img className="arrow-img" src={arrow}/>
          <p className="aside-head">best seller list</p>
          </article>
          <ul className="aside-list">
          <li className="list-head"><a href="" className="best-seller">Antiques</a></li>
          <li className="list-content"><a href="" className="best-seller">234048 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Art</a></li>
          <li className="list-content"><a href="" className="best-seller">31168 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Auctions for Charity</a></li>
          <li className="list-content"><a href="" className="best-seller">513 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Baby Stuff</a></li>
          <li className="list-content"><a href="" className="best-seller">2492 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Book,Comics & Magazines</a></li>
          <li className="list-content"><a href="" className="best-seller">87946 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Cars & Vehicle</a></li>
          <li className="list-content"><a href="" className="best-seller">40328 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Coins & Banknotes</a></li>
          <li className="list-content"><a href="" className="best-seller">8827 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Collectibles</a></li>
          <li className="list-content"><a href="" className="best-seller">175718 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Computing</a></li>
          <li className="list-content"><a href="" className="best-seller">12314 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Consumer Electronics</a></li>
          <li className="list-content"><a href="" className="best-seller">10441 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Crafts & Sewing</a></li>
          <li className="list-content"><a href="" className="best-seller">30337 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Dolls & Bears</a></li>
          <li className="list-content"><a href="" className="best-seller">4683 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Health & Beauty</a></li>
          <li className="list-content"><a href="" className="best-seller">35774 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Home & Garden</a></li>
          <li className="list-content"><a href="" className="best-seller">40634 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Jewelry & Watches</a></li>
          <li className="list-content"><a href="" className="best-seller">46238 auctions</a></li>
          <li className="list-head"><a href="" className="best-seller">Movies & DVD</a></li>
          <li className="list-content"><a href="" className="best-seller">25461 auctions</a></li>
          </ul>
        </aside>
        <div className="content-page">
          <div className="welcome-text">Welcome!!!</div>
            {children}
          
        </div>

        <footer className="footer-part"></footer>
      </div>
    );
  }
}

export default App;
