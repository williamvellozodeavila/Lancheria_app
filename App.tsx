// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import CartScreen from './screens/CartScreen';
import { Lanche } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartIcon from './components/CartIcon';
import { CartContext } from './contexts/CartContext';

export type RootStackParamList = {
  Lancheria: undefined;
  'Detalhes do Lanche': { lanche: Lanche };
  Carrinho: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState<Lanche[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('lancheria_login').then((val) => {
      if (val === 'true') setLoggedIn(true);
    });
  }, []);

  const addToCart = (lanche: Lanche) => {
    setCart((prev) => [...prev, lanche]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Lancheria"
          options={({ navigation }) => ({
            headerRight: () =>
              loggedIn ? (
                <CartIcon onPress={() => navigation.navigate('Carrinho')} />
              ) : null,
          })}
          >
            {(props) => <HomeScreen {...props} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          </Stack.Screen>

          <Stack.Screen name="Detalhes do Lanche" component={DetailScreen} />
          <Stack.Screen name="Carrinho" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}
