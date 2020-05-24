import React from "react";
import {People,Band} from "./Icons";

import "../scss/countryInfo.scss";


const CountryStats=(props)=>{

    /**Recibimos la informacion del pais y la almacenamos */
    const dataCountry=props.dataCountry

    /**Renderizamos la informacion */
    return(
        <div className="countryInfo card">
            <img src={dataCountry?.flag}   
                 alt={dataCountry?.alpha2Code} 
                 className="countryInfo_flag"/>

            <div className="countryInfo_data">
                <p className="countryName">{dataCountry?.name}</p>
                
                <div className="countryStats">
                    <div className="countryStats_population">
                        <People />
                        <p>{dataCountry?.population}</p>
                    </div>
                    <div className="countryStats_flag">
                        <Band />
                        <p>{dataCountry?.area}</p>
                    </div>
                </div>       
            </div>   
        </div>
    )
}

export default CountryStats;