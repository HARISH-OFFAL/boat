import  react from "react"
import banner from "./assets/banner1.webp"
import "./index.css"
import { FaShieldAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";


var Banner=(props)=>{
    return(
        <div>
        <img src={banner} className="ban"/>
        <div className="ull">
        <ul>0% EMI ON UPI</ul>
        <ul>INSTANT ONLINE APPROVAL</ul>
        <ul>POWERED BY SNAPMINT</ul>
        </div>

        <div className="bar">

        <div className="fir">
       < FaShieldAlt className="shield"/>
       <span><b>1 year warranty</b></span>
       </div>

       <div className="fir">
       <FaFile className="file"/>
       <span><b>7-days replacement</b></span>
       </div>

       <div className="fir">
       <TbTruckDelivery className="file"/>
       <span><b>free express delievery</b></span>
       </div>

       <div className="fir">
       <CgNotes className="file"/>
       <span><b>gst billing</b></span>
       </div>
     </div>
     <h1 className="q">Sale is live</h1>

         </div>

    )
}
export default Banner