import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//providers
import {ApartmentProvider} from './Providers/ApartmentsProvider'


ReactDOM.render(
  <ApartmentProvider>
     <App />
  </ApartmentProvider>,
  document.getElementById('root')
);