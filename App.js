import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import FormIns from './screens/FormIns/FormIns';
import CardList from './screens/CardList/CardList';
import InsCnx from './screens/InsCnx/InsCnx';
import Loading from './screens/Loading/Loading';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CardList /> */}
      {/* <InsCnx /> */}
      {/* <FormIns /> */}
      <Loading />
      <StatusBar style="auto" />
    </SafeAreaView>
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
