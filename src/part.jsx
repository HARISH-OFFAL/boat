import react from "react"
import photo from "./assets/photo.webp"
import "./index.css"


var Photo = (props) =>{
    return(
        <div>
        <img src={photo} className="img"/>
        <h1>Big Sale <b>Big Savings</b></h1>
        <div className="items">
        <ul>All deals</ul>
        <ul>True Wireless Earbuds</ul>
        <ul>Smart Watches</ul>
        <ul>Speakers and sound bars</ul>
        <ul>Neckbands and Head Phones</ul>
        </div>

        </div>
    )
}
export default Photo