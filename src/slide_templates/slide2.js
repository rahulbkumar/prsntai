import React from "react";
import "./slide2.css";
import Image from "./image";
import prsntlogo from './prsntlogo.svg';


export default class SLIDE2 extends React.Component {
    render() {
     
      return ( 
      
      <body>

  
      <div class="container2">
          <Image id = "im2" query="apple juice" /> 
      </div>
  
          <div className="horizontal-line"></div>
          <img src={prsntlogo} className="App-logo" alt="logo" />
          <div className="slideNum"><p className="little">01</p></div>
      </body>
    );}
  }
  