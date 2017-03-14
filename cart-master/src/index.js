import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import  MyFavorites  from "./components/MyFavorites";
import { Faq } from "./components/Faq";
import { CustomerCare } from "./components/CustomerCare";
import { Checkout} from "./components/checkout";
import "./css/reset.css";

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import './css/index.css';

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ProductList} />
        <Route path="/myfavorites" component={MyFavorites}/>
        <Route path="/cart" component={Cart} />
        <Route path="/faq" component={Faq}/>
        <Route path="/customercare" component={CustomerCare}/> 
        <Route path="/checkout" component={Checkout}/>
      </Route>
    </Router>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
