import React from 'react'
import image from "../img/sherlock-holmes-147255_640.png"
import Crt from "./Cart"
function Header(props){
   
    return(
        <header className="head">
            <img src={image}/>
            <span id="crt"><Crt val ={props.value}/></span>
        </header>
    )
}
export default Header