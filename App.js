import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import InsCnx from './components/insCnx/insCnx';

export default function App() {
  return (
    <View style={styles.container}>
      <InsCnx />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
