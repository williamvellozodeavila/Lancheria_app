import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  StyleSheet,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { Lanche } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Lancheria'>;

type Props = {
  navigation: HomeNavigationProp;
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
};

const lanches: Lanche[] = [
  { id: '1', nome: 'X-Burguer', preco: 'R$ 15,00', imagem: require('../assets/xburguer.jpg'), descricao: 'Pão, carne, queijo e salada' },
  { id: '2', nome: 'X-Salada', preco: 'R$ 17,00', imagem: require('../assets/xsalada.jpg'), descricao: 'Pão, carne, queijo, salada e molho' },
  { id: '3', nome: 'X-Bacon', preco: 'R$ 18,00', imagem: require('../assets/xbacon.jpg'), descricao: 'Pão, carne, queijo e bacon crocante' },
  { id: '4', nome: 'X-Egg', preco: 'R$ 16,00', imagem: require('../assets/xegg.jpg'), descricao: 'Pão, carne, ovo e queijo' },
  { id: '5', nome: 'X-Frango', preco: 'R$ 17,50', imagem: require('../assets/xfrango.jpg'), descricao: 'Frango grelhado, queijo e alface' },
  { id: '6', nome: 'X-Calabresa', preco: 'R$ 18,50', imagem: require('../assets/xcalabresa.jpg'), descricao: 'Calabresa frita, queijo e cebola' },
  { id: '7', nome: 'X-Tudo', preco: 'R$ 20,00', imagem: require('../assets/xtudo.jpg'), descricao: 'Tudo incluso, do jeitinho brasileiro' },
  { id: '8', nome: 'X-Vegano', preco: 'R$ 19,00', imagem: require('../assets/xvegano.jpg'), descricao: 'Hambúrguer vegetal, salada e molho vegano' },
];

export default function Home({ navigation, loggedIn, setLoggedIn }: Props) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const abrirWhatsApp = () => {
    Linking.openURL('https://wa.me/5599999999999');
  };

  const handleLogin = async () => {
    if (usuario === 'admin' && senha === '1234') {
      await AsyncStorage.setItem('lancheria_login', 'true');
      setLoggedIn(true);
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos.');
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('lancheria_login');
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return (
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={styles.tituloLogin}>Login</Text>
          <TextInput
            placeholder="Usuário"
            value={usuario}
            onChangeText={setUsuario}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
          />
          <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
            <Text style={styles.loginTxt}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutBotao}>
        <Text style={styles.logoutTexto}>Sair</Text>
      </TouchableOpacity>

      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.descricao}>Bem-vindo à Lancheria Sabor Caseiro! Delícias feitas com amor e qualidade.</Text>

      {lanches.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('Detalhes do Lanche', { lanche: item })}
          style={styles.card}
        >
          <Image source={item.imagem} style={styles.foto} />
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>{item.preco}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={abrirWhatsApp} style={styles.whatsappBotao}>
        <Text style={styles.whatsappTexto}>Fale conosco no WhatsApp</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  logo: { width: 100, height: 100, alignSelf: 'center', marginBottom: 10 },
  descricao: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  loginBox: { marginTop: 100, backgroundColor: '#f9f9f9', padding: 20, borderRadius: 8 },
  tituloLogin: { fontWeight: 'bold', fontSize: 18, marginBottom: 8, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 5, borderRadius: 5 },
  loginBtn: { backgroundColor: '#333', padding: 10, borderRadius: 5, marginTop: 10 },
  loginTxt: { color: '#fff', textAlign: 'center' },
  logoutBotao: { alignSelf: 'flex-end', backgroundColor: '#d9534f', padding: 6, borderRadius: 5, marginBottom: 10 },
  logoutTexto: { color: 'white', fontWeight: 'bold' },
  card: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 10 },
  foto: { width: 80, height: 80, borderRadius: 10 },
  nome: { flex: 1, fontSize: 16 },
  preco: { fontWeight: 'bold', fontSize: 16 },
  whatsappBotao: { marginTop: 20, backgroundColor: '#25D366', padding: 10, borderRadius: 10 },
  whatsappTexto: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});
