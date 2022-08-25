import React from 'react';
import { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, SafeAreaView } from 'react-native';
import styles from './style';
import data from './data';
import FiltrageCard from '../FiltrageCard/FiltrageCard';
import { Animated } from 'react-native';
import FwButton from '../../../components/FwButton/FwButton';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';


const FiltrageList = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const width = Dimensions.get('window').width
    const ref = React.useRef();

    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const cIndex = Math.round(contentOffsetX / width);
        setCurrentIndex(cIndex);
    };
    const next = () => {
        const nextSlideIndex = currentIndex + 1;
        if (nextSlideIndex != data.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentIndex(currentIndex + 1);
        }
    }
    const nextScreen = () => {
        currentIndex >= 2 ? (navigation.navigate('insCnx')) : (next())
    }
    const skip = () => {
        navigation.navigate('insCnx')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ProgressBar count={data} scrollX={scrollX} style={styles.progressBar} />
            {/* {
                currentIndex < 2 ? (
                    <FwButton type="secondary" content={'Skip'} onPress={skip} />
                ) : <Text></Text>
            } */}
            </View>
            
            <FlatList
                data={data}
                renderItem={({ item }) => <FiltrageCard data={item} />}
                horizontal
                pagingEnabled
                // scrollEnabled
                onMomentumScrollEnd={updateCurrentSlideIndex}
                snapToInterval={Dimensions.get('window').width}
                decelerationRate={'fast'}
                snapToAlignment={'start'}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                ref={ref}
            />
            <View style={styles.btnContainer}>
                <FwButton type="primary" onPress={nextScreen}
                    content={currentIndex < 2 ? 'Suivant' : 'Fait'} />


            </View>
        </SafeAreaView>
    );
}

export default FiltrageList;