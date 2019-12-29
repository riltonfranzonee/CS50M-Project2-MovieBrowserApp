import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { fetchDetails } from '../api'
import SearchScreen from './SearchScreen'


export default class MovieDetailsScreen extends React.Component{

    state={
        data: ''
    }

    componentDidMount(){
        this.getDetails()
    }

    getDetails = async () => { 
        const movieId = this.props.navigation.state.params.movieId
        const details = await fetchDetails(movieId)
        this.setState({data: details})
        this.handleUpdate()
    }
    
    handleUpdate = () => {
        this.forceUpdate()
    }


    render(){
        return(
        <ScrollView style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Image style={styles.poster} source={{uri: this.state.data.Poster}}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.state.data.Title}</Text>
                    <Text style={styles.year}>({this.state.data.Year})</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                    <View style={styles.rating}><Text style={[styles.quickInfo, styles.ratingText]}>Rating: {this.state.data.imdbRating}</Text></View>
                    <Text style={styles.quickInfo}>{this.state.data.Runtime}</Text>
                    <Text style={styles.quickInfo}>{this.state.data.Language}</Text>
            </View>
            <View style={styles.plotContainer}>
                <Text style={styles.plotText}>{this.state.data.Plot}</Text>
                <View style={styles.moreDataContainer}><Text style={[styles.dataTitle, styles.quickInfo]}>Genre: </Text><Text style={[styles.quickInfo, styles.genre]}>{this.state.data.Genre}</Text></View>
            </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer:{
        alignItems: 'center'
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer:{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    plotContainer:{
        margin: 20,
        justifyContent:'center'
    },
    moreDataContainer:{
        flexDirection: 'row',
        marginTop: 20,
        flexShrink: 1
    },
    poster:{
        marginTop: 7,
        width: 400,
        height: 560
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        fontSize: 20,
        flexShrink: 1
    },
    year:{
        fontSize: 20,
        marginTop: 30,
        marginLeft: 5,
    },
    quickInfo:{
        fontSize: 18,
        flexShrink: 1
    },
    rating:{
        backgroundColor: '#1874CD',
        color:'#fff',
        justifyContent: 'center',
        height: 30,
        width: 120,
        alignItems: 'center',
        borderRadius: 10
    },
    ratingText:{
        color: '#fff',
        fontWeight: 'bold'
    },
    plotText:{
        flexShrink:1,
        fontSize: 18,
        fontStyle: 'italic'
    },
    dataTitle:{
        fontWeight: 'bold'
    }
})