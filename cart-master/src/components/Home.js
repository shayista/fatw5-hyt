import React from "react";
import { render } from "react-dom";
import { UncontrolledTooltip  } from 'reactstrap';

import  value  from "../productData/productData.json"
import "../css/home_style.css";

export class Home extends React.Component {
	constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }
 toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

	render() {
		



		return (
			<div className="container">
    <div className="banner">
        <img className="bigProduct" src={ "./app/assets/images/productbig.png"}/>
        <div className="special">
            <p className="spl">Special Offer! </p>
            <p className="ipad">iNeed the iPad</p>
            <button className="details">details</button>
        </div>
    </div>
    <div className="featured">
        <img src={ "./app/assets/images/arrow.png"} className="arrow" />
        <p className="featuredBanner">featured products</p>
    </div>
    <ul className="ulConatiner">

        {value.products.map((data, index)=> (
        <li className="boxContainer" key={index}>
            <div className="inner">
                <p className="title"> {data.name}</p>




                <a href="#"><img className="produ" id={ 'Tooltip-' + index} src={data.imageUrl} />
                </a>

                <UncontrolledTooltip placement="top" target={ 'Tooltip-' + index}>
                    {data.tooltip}
                </UncontrolledTooltip>
                <p className="Price"> Price:<span className="cost">{data.price}</span> </p>
            </div>
        </li>

        ))}
    </ul>


    <div className="deal">
        <div className="dealImg">


            <p className="dealText">Deal</p>
            <p className="dealText1">of the day</p>
            <span className="dealProduct">
                       <img className="barcode" src={"./app/assets/images/barcode.gif"}/>
                     
                       {value.deal.map((deal, i)=>

                       <p key={i}>
                      <p className="title1"> {deal.name}</p>
                        <img src={"./app/assets/images/product7.png"}/>
                      <p className ="Price"> Price:<span className = "cost">{deal.price}</span> </p>
            </p>) }
            </span>
        </div>
    </div>

</div>
		)
	}
}
