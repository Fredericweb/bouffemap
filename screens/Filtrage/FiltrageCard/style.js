import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    

    // Text container style

    textContainer: {
        width: width,
        height: '20%',
        padding: '4%',
    },
    title: {
        fontSize: width/15.625,
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: height/45.11,
        color: '#000'
    },
    subtitle: {
        fontSize: width/25,
        color: '#7C7C7C',
        textAlign: 'center',
        fontWeight: '400',
    },

});

export default styles;