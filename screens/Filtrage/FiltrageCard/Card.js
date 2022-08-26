import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import Icon from '../../../components/Icon/Icon'


const Card = (props) => {
    const { iconType, iconName, text } = props.data
    const count = props.count
    let display
    count > 5 ? (display = styles.cardRow) : (display = styles.card)
    return (
        <View style={styles.cardContainer}>
            <View style={display}>
                <Icon iconType={iconType} iconName={iconName} iconColor='black' />
                <Text style={styles.cardText}>{text}</Text>
                <StatusBar style="auto" />
            </View>
        </View>
    );
};



export default Card;
const styles = StyleSheet.create({
    cardContainer :{
        width:'100%',
        height:'100%',
        flex:1,
    },
    card: {
        width:160,
        height:100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7c7c7c',
        borderWidth: 1,
        margin:7,
    },
    cardRow:{
        width:160,
        height:50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7c7c7c',
        borderWidth: 1,
        margin:7,
    },
    cardText:{
        fontSize: 14,
        fontWeight: 700,
        color: '#7c7c7c'
    }
});