
import React,{useState,useEffect} from "react";
import MapCountry from "./MapCountry";
import MapStats from "./MapStats";


const Map=(props)=>{

  const [country,setCountry]=useState("PE")

  const [dataCovid,setDataCovid]=useState([])
  const [dataCountry,setDataCountry]=useState([])
  const [loading,setLoading]=useState(false);

  const ApiCovid=`https://api.covid19api.com/dayone/country/${country}`;
  const ApiCountry=`https://restcountries.eu/rest/v2/alpha/${country}`

 

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

    const getCountryInfo=()=>{
      fetch(ApiCountry,{method:'get'})
      .then(response => response.json())
      .then(data => {
        setDataCountry(data)
        setLoading(false)
      })
      .catch(error => console.log('error', error));
    }

    getDataCovid();
    getCountryInfo();

  },[ApiCovid,ApiCountry,country])

 
  return(
    <div className="map">
      {loading? "CARGANDO...":""}
      <MapCountry theme={props.theme} country={country} setCountry={setCountry} />
      <MapStats dataCovid={dataCovid} dataCountry={dataCountry} loading={loading}/>
    </div>
  )
}

export default Map;


