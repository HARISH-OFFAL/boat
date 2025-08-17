import React from "react"
import "./index.css"
import { BiFontSize } from "react-icons/bi"

var About = (props) =>{
    return(
        <>
        <div className="right">

            <div className="heading">
        <span className="side">bo<b style={{color:"red"}}className="a">A</b>t</span>
        <h2>Subscribe to our email alerts!</h2>
        <input placeholder="Enter Your Email Adress" className="m"></input>
        </div>
        <div className="flex">
        <div>
            <ul>
                <ul className="head">shop</ul><br/>
                <ul>True wire less Airbuds</ul>
                <ul>Home Audio</ul>
                <ul>Smart Watches</ul>
                <ul>Misfit trimmers</ul>
            </ul>
        </div>
        <div>
            <ul>
                <ul>Wired less Headphone</ul>
                <ul>wire less speakers</ul>
                <ul>Wired head phone</ul>
                <ul>Mobile Acceroies</ul>
                <ul>TRebel</ul>
                <ul>Refer&Earn</ul>
            </ul>
        </div>

        <div>
            <ul>
                <ul></ul>
                <ul className="head">Help</ul>
                <br/>
                <ul>Track Your Order</ul>
                <ul>Warranty and Support</ul>
                <ul>Return Policies</ul>
                <ul>Service Center</ul>
                <ul>Bulk Orders</ul>
            </ul>
        </div>

        <div>
            <ul>
                <ul className="head">Company</ul>
                <br></br>
                <ul>About boat</ul>
                <ul>News</ul>
                <ul>REad our Block</ul>
                <ul>Careers</ul>
                <ul>Securities</ul>
                <ul>Investors Relations</ul>
                <ul>Social Responsibilities</ul>
                <ul>Warranty Policy</ul>
            </ul>
        </div>

        </div>
        </div>
        </>

    )
}
export default About