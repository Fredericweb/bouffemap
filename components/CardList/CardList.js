import React from 'react';
import { useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import styles from './style';
import data from './data';
import Card from '../Card/Card';
import { Animated } from 'react-native';
import Pagination from '../Pagination/Pagination';
import FwButton from '../FwButton/FwButton';


const CardList = () => {
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
    return (
        <View style={styles.container}>
            <Animated.FlatList
                data={data}
                renderItem={({ item }) => <Card data={item} />}
                horizontal
                pagingEnabled
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

            <Pagination count={data} scrollX={scrollX} />
            <View style={styles.btnContainer}>
                <FwButton type="primary" onPress={next} 
                content={
                    currentIndex < 2 ?'Suivant':'Commencer'}/>
                {
                    currentIndex < 2 ? (
                        <FwButton type="secondary" content={'Skip'} />
                    ) : <Text></Text>
                }

            </View>
        </View>
    );
}

export default CardList;