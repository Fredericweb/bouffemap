import { StyleSheet, Dimensions } from 'react-native';

const hScreen = Dimensions.get('window').height;
const wScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        width: wScreen,
        height: hScreen,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      },
    imgContainer: {
        width: wScreen,
        height: hScreen/2,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        overflow: 'hidden',
        // borderBottomColor: 'black',
        // borderWidth : 2,
        
    },
    left: {
        flexDirection: 'column',
        top: -10,
        width: '25%',
        left: -5,
    },
    center: {
        position: 'relative',
        flexDirection: 'column',
        top: -10,
        width: '50%'

    },
    right: {
        flexDirection: 'column',
        top: -10,
        width: '25%',
        left: 5,

    },
    imgLeftT: {
        width: '100%',
        height: '60%',
        left: -10,
        marginBottom: 10,
        borderRadius: 20,
    },
    imgLeftB: {
        width: '100%',
        left: -10,
        marginBottom: 10,
        height: '40%',
        borderRadius: 20,

    },
    imgCenterT: {
        width: '100%',
        height: '40%',
        borderRadius: 20,
        marginBottom: 10,
        top: -7

    },
    imgCenterB: {
        width: '100%',
        height: '60%',
        
        borderRadius: 20,
        // top: -65

    },
    imgRightT: {
        width: '100%',
        height: '60%',
        right: -10,
        marginBottom: 10,
        borderRadius: 20,
    },
    imgRightB: {
        width: '100%',
        right: -10,
        marginBottom: 10,
        height: '40%',
        borderRadius: 20,
    },

    // Text container style

    textContainer: {
        marginTop: hScreen/4,
        // marginBottom: hScreen/10,
        width: wScreen,
        height: '20%',
        padding: '4%',
        // borderBottomColor: 'black',
        // borderWidth : 2,
    },
    title: {
        fontSize: wScreen/15.625,
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: hScreen/45.11,
        color: '#000'
    },
    subtitle: {
        fontSize: wScreen/25,
        color: '#7C7C7C',
        textAlign: 'center',
        fontWeight: '400',
    },

});

export default styles;