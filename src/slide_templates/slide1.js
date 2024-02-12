import React from "react";
import "./slide1.css";
import Image from "./image";
import prsntlogo from './prsntlogo.svg';

export default class SLIDE1 extends React.Component {
  render() {
   
    return ( 
    
    <body>
      <div className = "bullets1">
        <ul>
            <li>First bullet point  safnsdnfds   dsafkndsklfndsfdsjfldsajfdsfdsaafdsadsf</li>
            <li>Second bullet point</li>
            <li>Third bullet point</li>
        </ul>
      </div>
    <div>

    <div class="container">
        <div></div>
        <Image id = "im1" query="mcdonalds apple juice" /> 
        <div></div>
    </div>

        <div className="horizontal-line"></div>
        <img src={prsntlogo} className="App-logo" alt="logo" />
        <div className="slideNum"><p className="little">01</p></div>
    </div>
    </body>
  );}
}