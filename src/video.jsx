import React from "react"
import "./index.css"
import {objjj} from "./ad.js"

var Video=(props)=>{
    return(
        <>
        
            <h1>Explore <b>Best Sellers</b></h1>
            <div className="video">
            {
        objjj.map((val) => (
            <div>
        <video src={val.video}controls autoplay muted loop preload width={"320px"} className="x" > </video>
        <p className="c">{val.topic}</p>
        </div>
        
        ))
        
    }
    
    </div>
    <h1>TOP PICS FOR YOU</h1>
        </>
    )
}
export default Video
