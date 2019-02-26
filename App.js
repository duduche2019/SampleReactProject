/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import { createStackNavigator, createAppContainer }  from 'react-navigation'

                              // Une constante parce que ça ne sera pas modifié
const RootStack = createStackNavigator({
  Page1: {screen: Page1, title: "Page1"},
  Page2: {screen: Page2}
})

const App = createAppContainer(RootStack);

export default App;
