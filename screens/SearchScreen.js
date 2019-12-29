import React from 'react'
import {Text, View, TextInput, StyleSheet, Button, FlatList, TouchableOpacity, Image} from 'react-native'

import {fetchMovies, fetchDetails} from '../api'
import { Icon } from 'react-native-elements'


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
        const { navigate } = this.props.navigation
        
        return(
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <TextInput style={[styles.searchForm, styles.textInput]} placeholder='Search for a movie' onChangeText={this.handleSubmitUpdate}/>
                    <View style={styles.btn}>
                        <TouchableOpacity  onPress={this.searchMovie}><Icon name='search' color='#fff'/></TouchableOpacity>
                    </View>
                </View>
                <FlatList data={this.state.movies} renderItem={({item}) => (
                    <TouchableOpacity style={styles.row} onPress={() => navigate('MovieDetails', {movieId: item.imdbID})}>
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
        marginTop: 20,
        borderWidth: .7,
        borderRadius: 15,
        borderColor: 'black',
        fontSize: 20,
        backgroundColor: '#ededed',
    },
    searchForm:{
        width: 320,
        height: 50,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
        
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
        marginBottom: 10,
        flexShrink: 1
    },
    btn:{
        backgroundColor: '#1874CD',
        height: 50,
        width: 60,
        justifyContent: 'center',
        alignItems:'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15
    },
    textInput:{
        marginLeft: 10
    }

})