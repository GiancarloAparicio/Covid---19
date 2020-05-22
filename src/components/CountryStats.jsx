import React from "react";
import {People,Band} from "./Icons";


const CountryStats=(props)=>{

    const dataCountry=props.dataCountry

    return(
        <div className="map-stats card">
            <img src={dataCountry?.flag}
                 alt={dataCountry?.alpha2Code} 
                 className="country-flag"/>

            <div className="country-info">
                <p className="country-name">{dataCountry?.name}</p>
                
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

export default CountryStats;