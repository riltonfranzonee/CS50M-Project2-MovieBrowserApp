import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

const MoviesList = props => {
    
    return (<FlatList data={this.props.movies} 
    renderItem={({ item }) => (
        <View><Text>{ item.Title }</Text></View>
        )}
     />)
}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default MoviesList