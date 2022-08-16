import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import IconButton from '../FwButton/IconButton';

const InsCnx = () => {
  const title = 'Rejoignez nous'
  const titleBr = '& profiter des offres'
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/img/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.contentTitle}>
        <Text style={styles.title} >
          {title + '\n' + titleBr}
        </Text>
      </View>


      <IconButton content='inscriptez-vous avec votre mail' type='primary' iconType='MaterialIcons' iconName='mail-outline' />
    </View>
  );
};

export default InsCnx;