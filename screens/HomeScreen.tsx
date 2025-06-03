import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Linking,
  TouchableOpacity,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderSection from '../components/HeaderSection';
import LoginBox from '../components/LoginBox';
import LancheCard from '../components/LancheCard';
import { Lanche } from '../types';

interface Props {
  navigation: any;
  loggedIn: boolean;
  setLoggedIn: (val: boolean) => void;
}

export default function HomeScreen({ navigation, loggedIn, setLoggedIn }: Props) {
  const [lanches, setLanches] = useState<Lanche[]>([]);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    fetch('http://192.168.0.103:3001/lanches')
      .then((res) => res.json())
      .then(setLanches)
      .catch((e) => console.error('Erro ao buscar lanches', e));
  }, []);

  function handleLogin() {
    if (usuario === 'admin' && senha === '123') {
      setLoggedIn(true);
      AsyncStorage.setItem('lancheria_login', 'true'); // salva login
    } else {
      alert('Login inválido');
    }
  }

  function handleLogout() {
    setLoggedIn(false);
    AsyncStorage.removeItem('lancheria_login');
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <HeaderSection />

      {loggedIn && (
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: '#ccc',
            padding: 8,
            borderRadius: 6,
            alignSelf: 'flex-end',
            marginBottom: 10,
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>Sair</Text>
        </TouchableOpacity>
      )}

      {!loggedIn ? (
        <LoginBox
          usuario={usuario}
          senha={senha}
          setUsuario={setUsuario}
          setSenha={setSenha}
          onLogin={handleLogin}
        />
      ) : (
        <>
          {lanches.map((lanche, index) => (
            <LancheCard
              key={`lanche-${lanche.id}-${index}`}
              lanche={lanche}
              onPress={() => navigation.navigate('Detalhes do Lanche', { lanche })}
            />
          ))}

          <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://wa.me/5599999999999')}
              style={{
                backgroundColor: '#25D366',
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                Falar com a Lancheria no WhatsApp
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
}
