import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import data from '../FiltrageList/data';
import styles from './style';


const FiltrageCard = (props) => {
    const { title, titleBr, subtitle, subtitleBr, } = props.data
   
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title + '\n' + titleBr}
                </Text>
                <Text style={styles.subtitle}>
                    {subtitle + '\n' + subtitleBr}
                </Text>
            </View>
           
            <StatusBar style="auto" />
        </View>
    );
};

export default FiltrageCard;
