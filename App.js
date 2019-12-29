import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import SearchScreen from './screens/SearchScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'

import {fetchMovies} from './api'

const AppNavigator = createStackNavigator({
  Search: SearchScreen,
  MovieDetails: MovieDetailsScreen 
}, {initialRouteName: 'Search', navigationOptions: {
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#1874CD"
  }
}})

export default class App extends React.Component {
 

  render() {
    return (
      <AppNavigator/>
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
