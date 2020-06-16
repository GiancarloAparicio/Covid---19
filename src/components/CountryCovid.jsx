import React from "react";
import {Confirmados,Activos,Fallecidos,Recuperados} from "../Data/Icons";

import "../scss/countryInfoCovid.scss";


const CountryCovid=(props)=>{

    /*Informacion del covid del pais selecionado*/
    const dataCovid=props.dataCovid[props.dataCovid.length - 1]



    /*Template para cada caja de informacion (muertos,infectados,...)*/
    const CountryBoxData=(props)=>{
      let boxData= `countryCovid_box_data ${props.color}`;
  
      return(
        <div className=" countryCovid_box card ">
          <p className="countryCovid_box_title">{props.title}</p>
          <div className={boxData}>
            <props.icon />
            <p> {dataCovid? dataCovid[props.value] :"0"} </p>
         </div>
      </div>
      );
    }



    /*Retornamos grid-template con la informacion del covid por pais*/
    return(
        <div className="countryCovid_grid">

          <CountryBoxData color="yellow"
                          title="Confirmados"
                          icon={Confirmados} 
                          value="Confirmed"/>
            
          <CountryBoxData color="red"
                          title="Fallecidos"
                          icon={Fallecidos}
                          value="Deaths"/>
          
          <CountryBoxData color="blue"
                          title="Activos"
                          icon={Activos}
                          value="Active"/>
          
          <CountryBoxData color="green"
                          title="Recuperados"
                          icon={Recuperados}
                          value="Recovered"/>

        </div>
        
    );
}

export default CountryCovid;