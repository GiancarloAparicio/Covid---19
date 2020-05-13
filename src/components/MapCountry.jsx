import React,{ Component } from "react";
import country from "world-map-country-shapes";
import svgPanZoom from "svg-pan-zoom";
import {ZoomIn,ZoomOut,ZoomReset} from "./Icons";


class MapCountry extends Component {
    constructor(props){
      super();

      this.mapSvg=React.createRef();
      this.zoomIn=React.createRef();
      this.zoomOut=React.createRef();
      this.zoomReset=React.createRef();

      this.state = {
        selectedCountries: {PE: true}
      };

    }

    beforePan = function(oldPan, newPan){
        let gutterWidth = 100;
        let gutterHeight = 100;

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

        
          this.zoomIn.current.addEventListener("click",()=>mapWorld.zoomIn())
          this.zoomOut.current.addEventListener("click",()=>mapWorld.zoomOut())
          this.zoomReset.current.addEventListener("click",()=> mapWorld.resetZoom())
        
    }
   
    toggleCountry = (country) => {
       
      this.props.setCountry(country.id)

      const { selectedCountries } = this.state;
      
      this.setState({
        selectedCountries: {
          [country.id]: !selectedCountries[country.id]
        }
      });
    };

    
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
        
      <div className="map-svg">
        <svg
         className="country"
         xmlns="http://www.w3.org/2000/svg"
         height="400"
          width="800"
          viewBox="0 0 2000 1001"
          ref={this.mapSvg}
        >
        {mapCountries}
        </svg>
        <div className="mapsControl">
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
   
  export default MapCountry;