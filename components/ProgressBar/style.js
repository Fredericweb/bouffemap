import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   bar: {
      width:227,
      borderRadius: 5,
      flexDirection: 'row',
      overflow:'hidden',
   },
   dot: {
      width:230/3,
      height: 5,
      // borderRadius: 5,
      backgroundColor: '#2E8B5F',
      position:'relative'
   },
   background:{
      width: 227,
      height: 5,
      borderRadius: 5,
      backgroundColor: '#7C7C7C',
      opacity: 0.3

   }

});

export default styles;