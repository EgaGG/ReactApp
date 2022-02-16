import React from 'react';
import {render, ReactDOM} from 'react-dom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { About, Clicker } from './Components/Index';
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
<Routes>
<Route path="/" element={<App />} />
<Route path="/About" element={<About />} />
<Route path="/Clicker" element={<Clicker />} />
</Routes>
</BrowserRouter>

,
rootElement);
