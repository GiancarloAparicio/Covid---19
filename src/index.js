import React,{useState} from "react";
import ReactDOM from 'react-dom';

import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './styles/index.css';
import * as serviceWorker from './test/serviceWorker';

const App=()=>{
    
  const [theme,setTheme]=useState("dark");



  return(
      <div className={theme}> 
          <Header theme={theme} setTheme={setTheme}/>
          <Map theme={theme}/>
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
