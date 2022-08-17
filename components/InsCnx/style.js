import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      width: width,
      height: height,
      alignItems: 'center',
   },
   header: {
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent : 'center',
      marginTop : height/16.24,
   },
   logo: {
      width: 109,
      height: 28,
      justifyContent: 'center',
      marginBottom: height/20.3
   },
   title : {
      fontSize: width/15.625,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: height/20.3
      
   },
   btn: {
      marginBottom: height/8.12,
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
      paddingHorizontal: 20,
      marginBottom: height/20.3
   },
   ligne: {
      backgroundColor:'#7C7C7C',
      width: width/6.820,
      height: 1,
      opacity: 0.3
   },
   subText : {
      color: '#7C7C7C',
      fontSize: width/26.78,
      fontWeight: '500',
   },
   socialCnx : {
      width: width,
      // marginBottom: height/8.12,

   },
   socialBtn: {
      marginBottom: height/27
   },
   footer: {
      width: width,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      bottom: -20
   },
   cnxLink : {
      color : '#2E8B5F',
      marginLeft: width/187.5,
      fontSize: width/29,
      fontWeight: '400',
   },
   bottomText:{
      fontSize: width/29,
      fontWeight: '400',
   }

});

export default styles;