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
    height: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: height / 16.24,
    marginBottom: height/40.6
  },
  skip:{
    position:'absolute',
    right: width/18.75
  },
  skipText: {
    color: '#7C7C7C',
    textDecorationLine:'underline'
  },
  btnContainer:{
    bottom: height/54.13
  }
});

export default styles;