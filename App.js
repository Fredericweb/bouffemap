import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import FormIns from './components/FormIns/FormIns';

export default function App() {
  return (
    <View style={styles.container}>
      <FormIns />
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
