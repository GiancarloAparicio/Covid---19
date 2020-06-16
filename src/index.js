import React,{useState,useEffect} from "react";
import ReactDOM from 'react-dom';

import Header from "./components/Header";
import Map from "./components/Map";
import Char from "./components/Char";
import Footer from "./components/Footer";

import './scss/index.scss';  /*Cambiar a SCSS */
import * as serviceWorker from './test/serviceWorker';


const App=()=>{
    
  const [theme,setTheme]=useState("dark");

  useEffect(()=>{
    let $body=document.querySelector("body");
    $body.className=theme;
    
  });

  return(
      <div> 
          <Header theme={theme} setTheme={setTheme}/>
          <Map theme={theme}/>
          <Char />
          <Footer />
      </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
