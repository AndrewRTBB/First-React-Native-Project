import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Styles = require('../style/style');

export default class home extends Component {
  render() {
    return (
      <View>
        <Text style={Styles.heading}> Welcome!</Text>
        <Text style={Styles.sectionText}>  cd /Users/Andrew/Projects/BetterProject
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-androidlorem  wdwedwdeweeedededededededededededededededededededededd</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('home', () => home)
