import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Platform,
  Text,
  StatusBar,
} from 'react-native';

import AppNavigator from './src/App'
// import './ReactotronConfig';

// console.disableYellowBox = true;

// global.changeFileToPng = (file)=>{
//   if(Platform.OS=='android'){
//     return file;
//   }
//   let pos = file.lastIndexOf(".");
  
//   //console.log(file);
//   file = file.substr(0, pos < 0 ? file.length : pos) + ".png";
//   //console.log(file);
//   return file
// }
export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    )
  };
};
