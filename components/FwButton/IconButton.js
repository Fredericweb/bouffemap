import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

const IconButton = (props) => {
    const { type, content, onPress, iconName, iconType } = props;

    const bgColor = type === 'primary' ? '#2E8B5F' : '#FFFFFF';
    const textColor = type === 'primary' ? '#FFFFFF' : '#00000';
    const border = type === 'primary' ? '' : '#7C7C7C';
    const borderW = type === 'primary' ? '' : 1;
    const iconColor = type === 'primary' ? '#FFFFFF' : '#00000';
    const iconParam = type === 'primary' ? styles.icon : styles.iconOutline;

    return (
        <View style={styles.container}>

            <Pressable
                style={[styles.btnIcon, { backgroundColor: bgColor,borderColor: border,borderWidth: borderW }]}
                onPress={onPress}
            >
                {
                     iconType === 'MaterialIcons' ? (
                        <MaterialIcons 
                        style={iconParam}
                        name={iconName} 
                        size={24} 
                        color={iconColor} />
                    ) : (<Entypo
                        style={iconParam}
                        name={iconName}
                        size={24}
                        color={iconColor}
                    />
                    ) 
                }
                <Text style={[styles.titleIcon, { color: textColor }]}> {content} </Text>
            </Pressable>

        </View>
    );
}

export default IconButton;