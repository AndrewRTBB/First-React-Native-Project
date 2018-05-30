import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Switch
}
 from 'react-native';
import Home from './app/components/home/home';
import About from './app/components/about/about';
import Contact from './app/components/contact/contact';
var Styles = require('./app/components/style/style');

export default class App extends Component {
  constructor(){
    super();
    this.state = { 
      logoHidden: false
    }
  }

  render() {
    let logoHidden = this.state.logoHidden;
    let img = <Text></Text>;
    if(logoHidden){
      img = <Text></Text>;
    } else{
      img = <Image style={Styles.image} source={require('./logo.png')} />
    }
    return (
      <View>
      <View style={Styles.imageWrap}>
        {img}
        <Switch onValueChange={(value) => this.setState({logoHidden: value})} value={this.state.logoHidden}/>
      </View>
      <ScrollView style={Styles.scrollView}>
        <Home />
        <About />
        <Contact />
      </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('businessapp', () => businessapp)
