import React from 'react'
import {Text, View, TextInput, StyleSheet, Button, FlatList, TouchableOpacity, Image} from 'react-native'

import {fetchMovies} from '../api'
import MoviesList from '../MoviesList'


export default class SearchScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Movie Browser',
      })

      state ={
          searchInput: '',
          movies: null
      }

    handleSubmitUpdate =  text => this.setState({searchInput: text})
    
    searchMovie = async () => {
        try{
        const searchResults = await fetchMovies(this.state.searchInput)
        this.setState({movies: searchResults})
      } catch(err){
        const errMessage = err.message
        this.setState({err: errMessage})
      }
      }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.searchForm} placeholder='Search for a movie' onChangeText={this.handleSubmitUpdate}/>
                    <Button style={styles.btn} title='Submit' onPress={this.searchMovie}/>
                </View>
                <FlatList data={this.state.movies} renderItem={({item}) => (
                    <TouchableOpacity style={styles.row}>
                        <Image style={styles.image} source={{uri: item.Poster}}/>
                        <View style={styles.searchInfo}>
                            <Text style={styles.movieTitle}>{item.Title}</Text>
                            <Text>{item.Year} ({item.Type})</Text>
                        </View>
                    </TouchableOpacity>    
                    )
                 } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
    searchContainer:{
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    searchForm:{
        borderWidth: .5,
        borderRadius: 5,
        borderColor: 'black',
        width: 300,
        height: 50
        
    },
    row: {
        padding: 20,
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    image:{
        width:50,
        height:70
    },
    searchInfo:{
        marginLeft: 20
    },
    movieTitle:{
        fontWeight: 'bold',
        marginBottom: 10
    }

})