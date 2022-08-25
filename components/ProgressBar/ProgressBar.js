import React from 'react';
import { View, Animated, Dimensions } from 'react-native';
import styles from './style';

const ProgressBar = ({ count, scrollX }) => {
    const width = Dimensions.get('window').width
    const dotPosition = Animated.divide(scrollX, width);
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                {count.map((_, index) => {
                    const inputRange = [(index - 1), index, (index + 1)]

                    const dotOpacity = dotPosition.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 1],
                        extrapolate: "clamp"
                    })
                    const dotRadius = dotPosition.interpolate({
                        inputRange,
                        outputRange: [5, 0, 5],
                        extrapolate: "clamp"
                    })

                    return (<Animated.View style={[styles.dot]} opacity={dotOpacity}  key={index} ></Animated.View>)
                })}
            </View>

        </View>
    );
}

export default ProgressBar;