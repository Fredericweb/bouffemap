import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';


const Loading = () => {
  
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/img/logo.png')}
                style={styles.logo}
            />
            <StatusBar style="auto" />
        </View>
    );
};

export default Loading;
