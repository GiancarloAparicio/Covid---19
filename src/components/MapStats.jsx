import React from "react";
import {People,Band,Loading} from "./Icons";


const MapStats=(props)=>{

    const dataCovid=props.dataCovid[props.dataCovid.length - 1]
    const dataCountry=props.dataCountry

    return(
        <div className="map-stats">
            <img src={dataCountry?.flag}
                 alt={dataCovid?.CountryCode} 
                 className="country-flag"/>

            <div className="country-info">
                <p className="country-name">{dataCovid?.Country}</p>
                
                <div className="country-data">
                    <div className="country-data-people">
                        <People />
                        <p className="data-people">{dataCountry?.population}</p>
                    </div>
                    <div className="country-data-flag">
                        <Band />
                        <p className="data-flag">{dataCountry?.area}</p>
                    </div>
                </div>       
            </div>
            
            
        </div>
    )
}

export default MapStats;