import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      bottom: height/14,
      alignItems: 'center',
      justifyContent: 'center',
      // borderBottomColor: 'black',
      // borderWidth : 2,
   },
   dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: '#2E8B5F',
      marginHorizontal: 8,
   }

});

export default styles;