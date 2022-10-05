/*import React from 'react';
import './index.css';
import { GifExpertApp } from './GifExpertApp';
import { createRoot } from 'react-dom/client';

 const divRoot=document.querySelector("#root")
 const root = createRoot(divRoot); 

//const divRoot = reactDOM.createRoot(document.querySelector("#root"));
//const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <GifExpertApp/>,
  //document.getElementById("root")
);*/

//reportWebVitals();
import React from 'react';

import { createRoot } from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import './index.css';

//const divRoot=document.querySelector("root")
//const root = createRoot(divRoot); 
//const divRoot = createRoot(document.querySelector("root"));
//const root = createRoot(document.getElementById('root'));
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render( 
// <GifExpertApp />,
// document.getElementById("root")
//);
createRoot(
  document.getElementById("root")
).render(
  //<React.StrictMode>
    <GifExpertApp/>,
    
  //</React.StrictMode>
)