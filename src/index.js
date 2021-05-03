import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './GlobalStyles.css'

//providers
import {ApartmentProvider} from './Providers/ApartmentsProvider'


ReactDOM.render(
  <ApartmentProvider>
     <App />
  </ApartmentProvider>,
  document.getElementById('root')
);