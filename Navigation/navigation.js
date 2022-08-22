import React from 'react';
import { Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormIns from '../screens/FormIns/FormIns';
import CardList from '../screens/CardList/CardList';
import InsCnx from '../screens/InsCnx/InsCnx';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Slide'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name='Slide' component={CardList} />
            <Stack.Screen name='insCnx' component={InsCnx} />
            <Stack.Screen name='Form' component={FormIns} />

        </Stack.Navigator>
    );
}

export default Navigation;