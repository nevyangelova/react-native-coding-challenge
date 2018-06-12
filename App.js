import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/containers/WelcomeScreen';
import FinalScreen from './src/containers/FinalScreen';
import Form from './src/containers/Form';

const App = StackNavigator({
  Home: { screen: WelcomeScreen },
  Form: { screen: Form },
  Final: { screen: FinalScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <WelcomeScreen />
    );
  }
}
