import React from "react";
import {Confirmados,Fallecidos,Recuperados} from "./Icons";
import useFetch from "../hooks/useFetch";

import "../scss/worldStats.scss";


const WorldStats=(props)=>{

    /*Creamos variables donde se alojara la data*/ 
    const ApiWorld=`https://api.covid19api.com/world/total`;


    /*Consultamos la data ala API*/
    const dataWorld = useFetch(ApiWorld,{})
  
 
    /*Retornamos la informacion de covid de todo el mundo*/
    return(
        <div className="worldStats card">
           
            <p className="worldStats_title">Datos mundiales</p> 
            <div className="worldStats_stats">

                <p className="worldStats_text yellow">
                    Confirmados: <strong> {dataWorld?.data?.TotalConfirmed}</strong> <Confirmados />
                </p>

                <p className="worldStats_text red">
                    Fallecidos: <strong> {dataWorld?.data?.TotalDeaths}</strong> <Fallecidos />
                </p>

                <p className="worldStats_text green">
                    Recuperados: <strong> {dataWorld?.data?.TotalRecovered}</strong> <Recuperados />
                </p>
            </div>
        </div>
    );
}

export default WorldStats;