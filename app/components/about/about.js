import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Styles = require('../style/style');

export default class about extends Component {
  render() {
    return (
      <View>
        <Text style={Styles.heading}>
          About Us
        </Text>
                <Text style={Styles.sectionText}>lorem  wdwedede  cd /Users/Andrew/Projects/BetterProject
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-android  cd /Users/Andrew/Projects/BetterProject
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-androiddededefefeerfergertgertgetrgrgrtgrg  cd /Users/Andrew/Projects/BetterProject
   Have an Android emulator running (quickest way to get started), or a device connected
   react-native run-androiddwdew</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('about', () => about)
