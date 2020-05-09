import React from "react";
import {Sun,Moon} from "./Icons";

const Header=(props)=>{

    let change=()=>{ //Cambiamos el state de theme 
        let theme= (props.theme==="dark")? "light":"dark";

        props.setTheme(theme)
    }


    return(
    <header>
        <h1>Covid-19</h1>
        <div onClick={()=>change()}>
           {
            props.theme==="dark"? <Moon />:<Sun />
           }
        </div>
        
    </header>
    )
}

export default Header;