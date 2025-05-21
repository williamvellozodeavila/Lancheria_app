import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detalhe';
import { Lanche } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type RootStackParamList = {
  Lancheria: undefined;
  'Detalhes do Lanche': { lanche: Lanche };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('lancheria_login').then((val) => {
      if (val === 'true') setLoggedIn(true);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lancheria">
          {(props) => <HomeScreen {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="Detalhes do Lanche" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}