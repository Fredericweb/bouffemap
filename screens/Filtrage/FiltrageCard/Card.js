import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icon from '../../../components/Icon/Icon'
const { width, height } = Dimensions.get('window');


const Card = (props) => {
    const { iconType, iconName, text } = props.data
    const count = props.count
    let display
    count > 5 ? (display = styles.cardRow) : (display = styles.card)
    return (
        <View style={styles.cardContainer}>
            {
                display === styles.cardRow ? (
                    <View style={display}>
                        <Text style={styles.cardText}>{text}</Text>
                    </View>
                ) : (
                    <View style={display}>
                        <Icon iconType={iconType} iconName={iconName} iconColor='#7c7c7c' />
                        <Text style={styles.cardText}>{text}</Text>
                    </View>
                )
            }

            <StatusBar style="auto" />
        </View>
    );
};



export default Card;
const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    card: {
        width: width / 2.34,
        height: height / 8.12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7c7c7c',
        borderWidth: 1,
        margin: 7,
    },
    cardRow: {
        width: width / 2.34,
        height: height / 16.24,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#7c7c7c',
        borderWidth: 1,
        margin: 7,
    },
    cardText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#7c7c7c'
    }
});