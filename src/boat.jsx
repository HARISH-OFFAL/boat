import "./index.css"
// import banner from "./assets./banner.webp"
import React from "react"
import { FaSearch } from "react-icons/fa";

var Boat =()=> {

    return(
      <>
        <div className="top">
         <span className="index">GET 5% OFFER ON FIRST ORDER/CODE:"WELCOME"/SHOP NOW!</span>
        </div>
        <div className="navbar">
          <span className="side">bo<b style={{color:"red"}}className="a">A</b>t</span>          
          <div className="types">
            <ul>categories</ul>
            <ul>boat personalisation</ul>
            <ul>coprate orders</ul>
            <ul>more</ul> 
           </div>
           <div className="input">
           <FaSearch className="home"/>
           <input placeholder="search" className="search"></input>
           <div/>
           
        </div>
        </div>







        </>


    )
}
export default Boat
