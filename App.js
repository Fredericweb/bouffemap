import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FormIns from './screens/FormIns/FormIns';
import CardList from './screens/OnBoarding/CardList/CardList';
import InsCnx from './screens/InsCnx/InsCnx';
import FiltrageCard from './screens/Filtrage/FiltrageCard/FiltrageCard';
import FiltrageList from './screens/Filtrage/FiltrageList/FiltrageList';
import FiltrageStart from './screens/Filtrage/FiltrageStart/FlitrageStart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
     
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName='Filtrage'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Slide' component={CardList} />
          <Stack.Screen name='insCnx' component={InsCnx} />
          <Stack.Screen name='Form' component={FormIns} />
          <Stack.Screen name='Filtrage' component={FiltrageList} />
          <Stack.Screen name='FiltrageStart' component={FiltrageStart} />
          <Stack.Screen name='FiltrageCard' component={FiltrageCard} />
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
