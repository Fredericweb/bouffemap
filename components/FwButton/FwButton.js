import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';

const FwButton = (props) => {
  const { type, content, onPress } = props;

  const bgColor = type === 'primary' ? '#2E8B5F' : '#2E8B5F';

  const textColor = type === 'primary' ? '#FFFFFF' : '#7C7C7C';
  
  return (
    <View style={styles.container}>

      <Pressable
        style={[styles.btn, { backgroundColor: bgColor }]}
        onPress={onPress}
      >
        <Text style={[styles.title, { color: textColor }]}> {content} </Text>
      </Pressable>

    </View>
  );
}

export default FwButton;