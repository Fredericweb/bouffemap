import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

const IconButton = (props) => {
    const { type, content, onPress, iconName, iconType } = props;

    const bgColor = type === 'primary' ? '#2E8B5F' : '#FFFFFF';

    const textColor = type === 'primary' ? '#FFFFFF' : '#7C7C7C';

    const border = type === 'primary' ? 'none' : '#7C7C7C';

    const iconColor = type === 'primary' ? '#FFFFFF' : '#00000';

    return (
        <View style={styles.container}>

            <Pressable
                style={[styles.btnIcon, { backgroundColor: bgColor }]}
                onPress={onPress}
            >
                {
                    iconType === 'MaterialIcons' ? (
                        <MaterialIcons 
                        style={styles.icon}
                        name={iconName} 
                        size={24} 
                        color={iconColor} />
                    ) : (<Entypo
                        style={styles.icon}
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