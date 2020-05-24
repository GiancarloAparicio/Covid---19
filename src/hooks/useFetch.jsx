import {useEffect,useState} from "react"

const useFetch=(url,initialState)=>{

    /**Creamos estados que almacenaran la data,cargando,errores */
    const [data,setData] = useState(initialState)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)


    /**Consultamos con la API */
    useEffect(()=>{
        setLoading(true)
        fetch(url,{method:'get'})
            .then(response=>response.json())
            .then(data=>{
                setData(data)
                setLoading(false)
            })
            .catch(error=>{
                setLoading(false)
                setError(error)
            })
    },[url]) /*Dependencias solo se ejecutara cuando la url cambie*/

    
    /**Retornamos los estados de data,cargando,errores */
    return{data,loading,error}
}

export default useFetch;