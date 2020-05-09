
import React from "react";
import MapCountry from "./MapCountry";
import MapStats from "./MapStats";

const Map=(props)=>{

  return(
    <div className="map">
      <MapCountry theme={props.theme} />
      <MapStats />
    </div>
  )
}

export default Map;


