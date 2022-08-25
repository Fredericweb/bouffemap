import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';



const Icon = (props) => {
    const { iconType, iconColor, iconName } = props
    if (iconType == 'Feather') {
        return (
            <View>
                <Feather
                    name={iconName}
                    size={24}
                    color={iconColor}
                />
            </View>

        )
    }

};

export default Icon;