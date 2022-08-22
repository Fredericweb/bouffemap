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
      width: width,
      marginTop : height/16.24,
      flexDirection: 'row',
      marginBottom: height/20.3,
      paddingHorizontal: 20,
   },
   backBtn: {
    position: 'absolute',
    left: 20,
    opacity: 0.5
   },
   logo: {
      width: 109,
      height: 28,
   },
   title : {
      fontSize: width/15.625,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: height/27.067
   },
   subTitle: {
     fontSize: width/23.43,
      fontWeight: '400',
      textAlign: 'center',
      justifyContent: 'center',
      color: '#7C7C7C',
      marginBottom: height/20.3
   },
   form: {
    flexDirection: 'column',
    width: width,
    paddingHorizontal: 20,
    
   },
   label: {
    fontSize: 12,
    fontWeight: '500'
   },
   input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#2E8B5F',
    color :'#7C7C7C',
    fontSize: width/23.43,
    marginBottom: height/20.3
   },
   inputPass: {
    height: 40,
    color :'#7C7C7C',
    fontSize: width/23.43,
    width:'100%'
   },
   password : {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#2E8B5F',
    paddingHorizontal:5,
    marginBottom: height/40.6
   },
   checkbox: {
    marginRight: width/18.75
   },
   checkContent:{
    flexDirection:'row',
    alignItems:'center',
   },

   btn: {
      marginBottom: height/8.12,
      width: width

   },
 

});

export default styles;