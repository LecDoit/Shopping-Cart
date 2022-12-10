import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import RouteSwitch from './RouteSwitch';

import "./style.css"
import background from './bg.jpg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{
    backgroundImage: `url(${background})`,
    backgroundPosition:'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'

  }}>
  <React.StrictMode>

    <RouteSwitch />
  </React.StrictMode>
  </div>
);





