import React from 'react';
import { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, SafeAreaView } from 'react-native';
// import styles from './style';
// import data from './data';
import FiltrageCard from '../FiltrageCard/FiltrageCard';
import { Animated } from 'react-native';
import Pagination from '../../../components/Pagination/Pagination';
import FwButton from '../../../components/FwButton/FwButton';


const FiltrageList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const width = Dimensions.get('window').width
    const ref = React.useRef();


    return (
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    );
}

export default FiltrageList;