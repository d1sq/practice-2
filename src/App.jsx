/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import {Authors, Books, Genres } from "./components";

function App() {
  
  return (
    <div> 
      {/* <Authors/> */}
      {/* <Books/> */}
      <Genres/>
    </div>
  );
}
export default App;
