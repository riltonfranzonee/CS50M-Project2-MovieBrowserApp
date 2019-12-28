import  React from 'react'
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native'

const styles = StyleSheet.create({
    row: {
        padding: 20,
    }
})

const Row = props => (
    <TouchableOpacity style={styles.row}>
        <Image source={{uri: props.image}}/>
        <View>
            <Text>{props.title}</Text>
            <Text>{props.type}</Text>
       </View>
    </TouchableOpacity>
)

export default Row