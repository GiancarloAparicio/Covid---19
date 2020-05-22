
import React,{useState,useEffect} from "react";
import MapCountry from "./MapCountry";
import CountryStats from "./CountryStats";
import CountryCovid from "./CountryCovid";
import WorldStats from "./WorldStats";


const Map=(props)=>{

  const [country,setCountry]=useState("PE")

  const [dataCovid,setDataCovid]=useState([])
  const [dataCountry,setDataCountry]=useState([])
 
  const [loading,setLoading]=useState(false);

  const ApiCovid=`https://api.covid19api.com/total/country/${country}`;
  const ApiCountry=`https://restcountries.eu/rest/v2/alpha/${country}`;
  

 

  useEffect(()=>{
    setLoading(true);

    const getDataCovid=()=>{
      fetch(ApiCovid,{method:'get'})
      .then(response => response.json())
      .then(data => {
        setDataCovid(data)
        setLoading(false)
      })
      .catch(error => console.log('error', error));
  
    }

    const getInfoCountry=()=>{
      fetch(ApiCountry,{method:'get'})
      .then(response => response.json())
      .then(data => {
        setDataCountry(data)
        setLoading(false)
      })
      .catch(error => console.log('error', error));
    }

    getDataCovid();
    getInfoCountry();

  },[ApiCovid,ApiCountry,country])

 
  return(
    <div className="map">
      {loading? console.log("cargando"):""}
      <MapCountry theme={props.theme} country={country} setCountry={setCountry} />
      <WorldStats />
      <CountryStats dataCountry={dataCountry} loading={loading}/>
      <CountryCovid dataCovid={dataCovid} />
    </div>
  )
}

export default Map;


