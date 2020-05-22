import React,{useEffect,useState} from "react";
import {Confirmados,Fallecidos,Recuperados} from "./Icons";


const WorldStats=(props)=>{

    const [dataWorld,setDataWorld]=useState({});
    const ApiWorld=`https://api.covid19api.com/world/total`;

    useEffect(()=>{
        const getDataWorld=()=>{
            fetch(ApiWorld,{method:'get'})
            .then(response => response.json())
            .then(data => {
                setDataWorld(data)
            })
            .catch(error => console.log('error', error));
          }
          getDataWorld();
         
    },[ApiWorld]);

    return(
        <div className="WorldStats card">
           
            <p className="WorldStats-title">Datos mundiales</p> 
            <div className="WorldStats-stats">
                <p className="WorldStats-text yellow">
                    Confirmados: <strong> {dataWorld?.TotalConfirmed}</strong> <Confirmados />
                </p>
                <p className="WorldStats-text red">
                    Fallecidos: <strong> {dataWorld?.TotalDeaths}</strong> <Fallecidos />
                </p>
                <p className="WorldStats-text green">
                    Recuperados: <strong> {dataWorld?.TotalRecovered}</strong> <Recuperados />
                </p>
            </div>
        </div>
    );
}

export default WorldStats;