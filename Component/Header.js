import React from 'react'
import image from "../img/sherlock-holmes-147255_640.png"
import Crt from "./Cart"
function Header(){
   
    return(
        <header className="head">
            <img src={image}/>
            <span id="crt"><Crt/></span>
        </header>
    )
}
export default Header