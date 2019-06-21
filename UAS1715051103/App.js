import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AboutMe from './UTS1715051013/AboutMe';
import MyApp from './UTS1715051013/MyApp';
import Navigation from './UTS1715051013/Navigation';
import Main from './UTS1715051048/Main'


export default class App extends React.Component {
  render() {
    return (
      <Main/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
