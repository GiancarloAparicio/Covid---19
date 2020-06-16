import React,{ Component } from "react";
import country from "world-map-country-shapes";
import svgPanZoom from "svg-pan-zoom";
import {ZoomIn,ZoomOut,ZoomReset} from "../Data/Icons";


import "../scss/mapWorld.scss";
import "../scss/mapWorldControl.scss";


class MapWorld extends Component {
    constructor(props){
      super();

      /**Creamos referencias para poder controlar el SVG con JavaScript */
      this.mapSvg=React.createRef();
      this.zoomIn=React.createRef();
      this.zoomOut=React.createRef();
      this.zoomReset=React.createRef();

      /**Variable que almacenara el o los paises que el usuario eliga */
      this.state = {
        selectedCountries: {PE: true}
      };

    }


    /**Manipulamos el SVG para poder movernos atraves de el (CONFIGURACION) */
    beforePan = function(oldPan, newPan){
        let gutterWidth = 100;
        let gutterHeight = 100;


        /**Limitamos el movimiento de SVG para que tenga un maximo */
        let sizes = this.getSizes()
        let leftLimit = -((sizes.viewBox.x + sizes.viewBox.width) * sizes.realZoom) + gutterWidth

        let rightLimit = sizes.width - gutterWidth - (sizes.viewBox.x * sizes.realZoom)
        
        let topLimit = -((sizes.viewBox.y + sizes.viewBox.height) * sizes.realZoom) + gutterHeight

        let bottomLimit = sizes.height - gutterHeight - (sizes.viewBox.y * sizes.realZoom)

        let customPan = {}
        customPan.x = Math.max(leftLimit, Math.min(rightLimit, newPan.x))
        customPan.y = Math.max(topLimit, Math.min(bottomLimit, newPan.y))

        return customPan;
      }

    componentDidMount(){

        /**Selecionamos el SVG y le damos la configuracion previa */
        let mapWorld= svgPanZoom(this.mapSvg.current, {
            panEnabled: true
          , zoomEnabled: true
          , controlIconsEnabled: false
          , zoomScaleSensitivity: 0.3
          , minZoom: 1
          , maxZoom: 10
          , fit: false
          , contain: true
          , center: true
          , refreshRate: 'auto'
          ,beforePan:this.beforePan
          });

        
          /**Controladores para hacer zoom,zoomIn,... */
          this.zoomIn.current.addEventListener("click",()=>mapWorld.zoomIn())
          this.zoomOut.current.addEventListener("click",()=>mapWorld.zoomOut())
          this.zoomReset.current.addEventListener("click",()=> mapWorld.resetZoom())
        
    }
   

    /**Guardamos el pais selecionado (Se puede elegir mas de un pais) */
    toggleCountry = (country) => {
       
      this.props.setCountry(country.id)

      const { selectedCountries } = this.state;
      
      this.setState({
        
        selectedCountries: {
         // ...selectedCountries,  /**Selecionar mas de un pais*/
          [country.id]: !selectedCountries[country.id]
        }
      });
    };

    
    /**Renderizamos el mapa SVG */
    render() {
      const { selectedCountries } = this.state;
      
      const mapCountries = country.map(country => (
        <path
          key={country.id}
          d={country.shape}

          style={
            this.props.theme==="dark"?
                {
                fill: selectedCountries[country.id] ? "#4479E9" : "white",
                cursor: "pointer",
                stroke: "#ccc",
                
                }
                :
                {
                  fill: selectedCountries[country.id] ? "#dd6b20" : "#1F2028",
                  cursor: "pointer",
                  stroke: "#ccc"
                }
            }

          onClick={() => this.toggleCountry(country)}
        />
      ));
      return (
        
      <div className="mapSVG">
        <svg
         className="worldSVG"
         xmlns="http://www.w3.org/2000/svg"
         height="400"
          width="800"
          viewBox="0 0 2000 1001"
          ref={this.mapSvg}
        >
        {mapCountries}
        </svg>

        {/**Controles para poder hacer zoom,zoomIn,... */}
        <div className="mapsWorldControl">
            <button className="icon" ref={this.zoomIn}>
                <ZoomIn />
            </button>
            
            <button className="icon" ref={this.zoomOut}>
                <ZoomOut />
            </button>
           
            <button className="icon" ref={this.zoomReset}>
             <ZoomReset />
            </button>
            
        </div>
      </div>
    
      );
    }
  }
   
  export default MapWorld;