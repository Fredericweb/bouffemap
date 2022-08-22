import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FormIns from './screens/FormIns/FormIns';
import CardList from './screens/CardList/CardList';
import InsCnx from './screens/InsCnx/InsCnx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
     
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName='Slide'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Slide' component={CardList} />
          <Stack.Screen name='insCnx' component={InsCnx} />
          <Stack.Screen name='Form' component={FormIns} />
        </Stack.Navigator>
      </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    width: '100%',
    height: '100%',

  }
});
