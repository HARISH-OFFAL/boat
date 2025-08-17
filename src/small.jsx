import React from "react"
import "./index.css"
import { objj } from "./mini.js"

var Small=(props)=>{
    return(
        <>
        
        <h1 className="topic">Shop by categories</h1>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        {
        objj.map((val)=>(
       <div>
         <img src={val.image}></img>
       <p className="names">{val.name}</p>
       </div>
        
        
    
    ))
}
</div>
  
        </>
        
    )
}
    


export default Small