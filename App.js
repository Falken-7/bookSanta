import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screenss/WelcomeScreen';
import {AppTabNavigator} from './Components/ApptabNavigator'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createSwitchNavigator,createAppContainer}   from  'react-navigation' 

export default function App() {
  return (
    <View style={styles.container}>
     <AppContainer/>
    </View>
  );
}

const switchNavigatior = createSwitchNavigator({WelcomeScreen:{screen:WelcomeScreen},BottomTab:{screen:AppTabNavigator}})
const AppContainer =  createAppContainer(switchNavigatior)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
