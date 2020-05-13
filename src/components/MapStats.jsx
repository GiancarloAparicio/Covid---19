import React,{useEffect} from "react";
import {People,Band} from "./Icons";

const MapStats=(props)=>{

    const dataCovid=props.dataCovid[props.dataCovid.length - 1]

    useEffect(()=>{
        console.log(dataCovid)
    },[dataCovid])


    return(
        <div className="map-stats">
            <p className="country">{dataCovid?.Country}</p>
            <div className="country-people">
                <People />
                <p>1845000</p>
            </div>
            <div className="country-band">
                <Band />
                <p>4000kb</p> 
                {}
            
            </div>
        </div>
    )
}

export default MapStats;