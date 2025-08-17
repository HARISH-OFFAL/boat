import React from "react";
import "./index.css"
import one from "./assets/first.webp"
import {obj} from "./news.js"

var Card=(props)=>{
    
    // obj.map((val) => (
    //     <Card image={val.image} value ={val.value} name={val.name} rate={val.rate} />
    //   ))
    

    return(
       <>
       {
        obj.map((val)=>(
        <div className="aa">

            <div className="card">
            <img src={val.image} className="buds" width="200px" height={"200px"} /> 
            <div className="z">
                <ul >{val.value}</ul>
                <ul>4.9</ul>
            </div>
            <div className="part">
            <p className="names"><b>{val.name}</b></p>
            <hr className="line"/>
            <span className="price">{val.rate}</span><br/>
            <span>{val.offer}</span>
            </div>

            </div>
            <br/>
        </div>
        
        ))
       }
            



            </>



    )

}
export default Card