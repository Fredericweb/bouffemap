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
        marginBottom: height/40.6
     },
     subTitle: {
       fontSize: width/23.43,
        fontWeight: '400',
        textAlign: 'center',
        color: '#7C7C7C',
        marginBottom: height/40.6
     },
     cardContainer: {
        marginBottom: height/20.3
     },
     card:{
        padding: height/40.6,
        paddingHorizontal: width/9.375,
        backgroundColor:'#FFFAF0',
        borderRadius: 15,
        marginBottom: height/67.67,
        alignItems:'center',
     },
     cardText: {
        textAlign: 'center',
        fontSize:width/26.785,
        fontWeight: '500',
     },
     icon: {
      marginBottom: height/162.4
     },
     btn: {
      width: '100%',
      bottom:0
     }

});

export default styles;