import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, FlatList, StyleSheet } from 'react-native';
import Icon from '../../../components/Icon/Icon'


const Card = (props) => {
    const { iconType, iconName, text } = props.data

    return (

        <View style={styles.card}>
            {/* <Icon iconType={iconType} iconName={iconName} iconColor='black' /> */}
            <Text style={styles.cardText}>{text}</Text>
            <StatusBar style="auto" />
        </View>
    );
};



export default Card;
const styles = StyleSheet.create({
    card: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
});