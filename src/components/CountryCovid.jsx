import React from "react";
import {Confirmados,Activos,Fallecidos,Recuperados} from "./Icons";

const CountryCovid=(props)=>{

    const dataCovid=props.dataCovid[props.dataCovid.length - 1]

    return(
        <div className="country-covid-grid">
            

          <div className=" country-covid card ">
            <p className="covid-case">Confirmados</p>
            <div className="covid-stats yellow">
                <Confirmados />
                <p> {dataCovid? dataCovid.Confirmed :"0"} </p>
            </div>
          </div>

          <div className=" country-covid card ">
            <p className="covid-case">Fallecidos</p>
            <div className="covid-stats red">
                <Fallecidos />
                <p> {dataCovid? dataCovid.Deaths:"0"} </p>
            </div>
          </div>

          <div className=" country-covid card ">
            <p className="covid-case ">Activos</p>
            <div className="covid-stats blue">
                <Activos />
                <p> {dataCovid? dataCovid.Active:"0"} </p>
            </div>
          </div>

          <div className=" country-covid card ">
            <p className="covid-case">Recuperados</p>
            <div className="covid-stats green">
                <Recuperados />
                <p> {dataCovid? dataCovid.Recovered:"0"} </p>
            </div>
          </div>

        </div>
        
    );
}

export default CountryCovid;