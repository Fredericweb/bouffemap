import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   bar: {
      width:width/1.66,
      borderRadius: 5,
      flexDirection: 'row',
      overflow:'hidden',
   },
   dot: {
      width:(width/1.6)/3,
      height: 5,
      backgroundColor: '#2E8B5F',
      position:'relative'
   },
   background:{
      width: width/1.66,
      height: 5,
      borderRadius: 5,
      backgroundColor: '#7C7C7C',
      opacity: 0.3

   }

});

export default styles;