import React from "react";
import PeopleIcon from "../icons/PeopleIcon"
import BandIcon from "../icons/BandIcon"

import "../../scss/countryInfo.scss";

const CountryStats = ({ dataCountry }) => {

    return (
        <div className="countryInfo card">
            <img src={dataCountry?.flag}
                alt={dataCountry?.alpha2Code}
                className="countryInfo_flag" />

            <div className="countryInfo_data">
                <p className="countryName">{dataCountry?.name}</p>

                <div className="countryStats">
                    <div className="countryStats_population">
                        <PeopleIcon />
                        <p>{dataCountry?.population}</p>
                    </div>
                    <div className="countryStats_flag">
                        <BandIcon />
                        <p>{dataCountry?.area}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountryStats;