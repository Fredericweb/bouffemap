import React from 'react';
import { View, Animated, Dimensions } from 'react-native';
import styles from './style';

const Pagination = ({count, scrollX}) => {
    const width = Dimensions.get('window').width
    const dotPosition = Animated.divide(scrollX, width);
    return (
        <View style={styles.container}>
           {count.map((_, index) => {
            const inputRange = [(index - 1) , index , (index + 1)]

            const dotOpacity = dotPosition.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp"
            })

            return (<Animated.View style={styles.dot} opacity={dotOpacity} key={index} >
            </Animated.View>)
           } )}
        </View>
    );
}

export default Pagination;