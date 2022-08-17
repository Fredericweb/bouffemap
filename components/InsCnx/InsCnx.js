import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
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
      <View style={styles.btn}>
        <IconButton
          content='Inscriptez-vous avec votre mail'
          type='primary'
          iconType='MaterialIcons'
          iconName='mail-outline'
        />
      </View>


      <View style={styles.subGrp}>
        <View style={styles.ligne}></View>
        <Text style={styles.subText}>Ou utilisez les réseaux sociaux</Text>
        <View style={styles.ligne}></View>
      </View>
      <View style={styles.socialCnx}>

        <View style={styles.socialBtn}>
          <IconButton
            content='inscriptez-vous avec votre Google'
            type='secondary'
            iconName='google--with-circle'
          />
        </View>

        <View style={styles.socialBtn}>
          <IconButton
            content='inscriptez-vous avec votre Facebook'
            type='secondary'
            iconName='facebook-with-circle'
          />
        </View>

        <View style={styles.socialBtn}>
          <IconButton
            content='inscriptez-vous avec votre Apple'
            type='secondary'
            iconName='facebook-with-circle'
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.bottomText}>
          Avez-vous déjà un compte ?
        </Text>
        <Pressable style={styles.cnxBtn}>
          <Text style={styles.cnxLink}>
            Se connecter
          </Text>
        </Pressable>

      </View>



    </View>
  );
};

export default InsCnx;