import React from 'react';
import {createRoot} from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const element = document.getElementById('root') as HTMLElement;
const root = createRoot(element);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();