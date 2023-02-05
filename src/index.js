import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FluentProvider, webDarkTheme } from '@fluentui/react-components';

const myBrand = {
  "10": "#FF6A00",
  "20": "#FF6E07",
  "30": "#FF730F",
  "40": "#FF7716",
  "50": "#FF7B1D",
  "60": "#FF7F24",
  "70": "#FF842C",
  "80": "#FF8833",
  "90": "#FF8C3A",
  "100": "#FF9041",
  "110": "#FF9549",
  "120": "#FF9950",
  "130": "#FF9D57",
  "140": "#FFA15E",
  "150": "#FFA666",
  "160": "#FFAA6D"
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FluentProvider theme={webDarkTheme}>
      <div id='main-layout'>

        <App />
      </div>
    </FluentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
