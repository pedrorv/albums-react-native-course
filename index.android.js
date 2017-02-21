import React, { Component } from 'react'
import { AppRegistry, Text }from 'react-native'
import Header from './src/components/header'

const App = () => {
  return (
    <Header headerText="Albums" />
  )
}

AppRegistry.registerComponent('albums', () => App)