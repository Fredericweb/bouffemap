import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'center',
   },
   logo: {
    width: 218,
    height: 56,
 },
 

});

export default styles;