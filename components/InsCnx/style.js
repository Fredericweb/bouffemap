import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      width: width,
      height: height,
      alignItems: 'center',
      // justifyContent: 'center',
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
   btn: {
      marginBottom: 90,
      width: width

   },
   contentTitle: {
      alignItems: 'center',
   },
   subGrp: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: width,
      paddingHorizontal: 20
   },
   ligne: {
      backgroundColor:'#7C7C7C',
      width: 55,
      height: 1,
      opacity: 0.3
   },
   subText : {
      color: '#7C7C7C',
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 40
   },
   socialCnx : {
      width: width,
   },
   socialBtn: {
      marginBottom: 30
   },
   footer: {
      width: width,
      alignItems: 'center',
      justifyContent: 'center'
   }

});

export default styles;