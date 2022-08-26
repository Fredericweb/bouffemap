import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default function App(props) {
    const { iconName, onPress } = props
    return (
        <View style={styles.header}>

            <Pressable style={styles.backBtn} onPress={onPress}>
                <AntDesign
                    style={styles.backIcon}
                    name={iconName}
                    size={24}
                    color="#7C7C7C"
                />
            </Pressable>
            <Image
                source={require('../../assets/img/logo.png')}
                style={styles.logo}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        marginTop: height / 16.24,
        flexDirection: 'row',
        marginBottom: height / 40.6,
        paddingHorizontal: 20,
    },
    backBtn: {
        position: 'absolute',
        left: 20,
        opacity: 0.5
    },
    logo: {
        width: 109,
        height: 28,
    },
});
