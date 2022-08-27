import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons, Feather, Entypo } from '@expo/vector-icons';

const Icon = (props) => {
    const { iconType, iconColor, iconName } = props


    return (

        <View>
            {
                iconType === 'Feather' ? (
                    <View style={styles.container}>
                        <Feather
                            style={styles.iconStyle}
                            name={iconName}
                            size={24}
                            color={iconColor}
                        />
                    </View>
                ) : <View></View>

            }
            {

                iconType === 'AntDesign' ? (
                    <View style={styles.container}>
                        <AntDesign name={iconName} size={24} color={iconColor} style={styles.iconStyle} />
                    </View>
                ) : <View></View>
            }
            {

                iconType === 'Entypo' ? (
                    <View style={styles.container}>
                        <Entypo name={iconName} size={24} color={iconColor} style={styles.iconStyle} />
                    </View>

                ) : <View></View>
            }
        </View>
    )


};

export default Icon;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})