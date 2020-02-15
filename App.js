import React from 'react';
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import Meteor, { withTracker, MeteorListView } from 'react-native-meteor';
import { StatusBar } from 'react-native';

Meteor.connect('ws://192.168.24.6:3000/websocket'); //do this only once


//SCREENS
import Home from './Screens/Home';
import Food from './Screens/Food';
import Drinks from './Screens/Drinks';
import Osusume from './Screens/Osusume';


const AppNavigator = createStackNavigator(
    {
        Home : Home,
        Food : Food,
        Drinks : Drinks,
        Osusume : Osusume
    },
    {
        defaultNavigationOptions: {
            header: null
      },
    }
);



const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
     componentDidMount() {
       StatusBar.setHidden(true);
    }
  render() {
    return <AppContainer />;
  }
}