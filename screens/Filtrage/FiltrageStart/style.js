import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: '#fff'
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
        color: '#7C7C7C',
        marginBottom: height/20.3
     },
     cardContainer: {
        marginBottom: 50
     },
     card:{
        padding: 20,
        paddingHorizontal: width/9.375,
        backgroundColor:'#FFFAF0',
        borderRadius: 15,
        marginBottom: 12,
        alignItems:'center',
     },
     cardText: {
        textAlign: 'center',
        fontSize:14,
        fontWeight: '500',
     },
     icon: {
      marginBottom: 5
     },
     btn: {
      
     }


});

export default styles;