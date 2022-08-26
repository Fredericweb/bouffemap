import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#ffffff',
    justifyContent:'center'
  },
  top:{
    // borderColor:'black',
    height: 12,
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: height / 16.24,
  },
  skip:{
    position:'absolute',
    right: 20
  },
  skipText: {
    color: '#7C7C7C',
    textDecorationLine:'underline'
  }
});

export default styles;