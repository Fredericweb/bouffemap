import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      width: width,
      height: height,
      overflow: 'hidden'
   },

   // btncontainer style

   btnContainer: {
      bottom: height/40.6,
      width: width,
      // borderBottomColor: 'black',
      // borderWidth : 2,
   }

});

export default styles;