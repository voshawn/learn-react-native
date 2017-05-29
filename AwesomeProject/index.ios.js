/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TestBackgroundImage from './components/background_image/background_image'

export default class AwesomeProject extends Component {
  render() {
    return (
      <TestBackgroundImage />
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
