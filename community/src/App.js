import React from 'react';
import "./styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Visualization from "./routes/Visualization";
import Prediction from "./routes/Prediction";
import Contact from "./routes/Contact";
import DonatePage from "./routes/DonatePage";
import Form from "./components/form";
import Glass from "./components/Glass"
import Visualize from './components/Visualize';

export default function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/visualization" element={<Visualization/>}/>
          <Route path="/visualize" element={<Visualize/>}>
        </Route>
        <Route path="/prediction" element={<Prediction/>}/>
          <Route path="/glass" element={<Glass/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/donate" element={<DonatePage/>}/>
          <Route path="/form" element={<Form />}>
        </Route>
      </Routes>
      <Navbar/>
    </div>
  );
};
