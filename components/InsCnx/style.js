import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'center'
    
   },
   header: {
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent : 'center',
      marginTop : 50,
      
   },
   logo: {
      width: 109,
      height: 28,
      justifyContent: 'center',
      marginBottom: 40
   },
   title : {
      fontSize: 24,
      fontWeight: 700,
      textAlign: 'center',
      marginBottom: 40
      
   },
   contentTitle: {
      alignItems: 'center',
   }

});

export default styles;