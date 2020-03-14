import React from 'react';
import {createAppContainer} from 'react-navigation';

import Main from './src/pages/Main';
import Routes from './src/routes/routes';


export default function App(){
  return(
    <Routes />
  );
}