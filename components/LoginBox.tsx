import React from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  usuario: string;
  senha: string;
  setUsuario: (val: string) => void;
  setSenha: (val: string) => void;
  onLogin: () => void;
}

export default function LoginBox({ usuario, senha, setUsuario, setSenha, onLogin }: Props) {
  return (
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
      <TouchableOpacity onPress={onLogin} style={styles.loginBtn}>
        <Text style={styles.loginTxt}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBox: {
    marginTop: 100,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
  },
  tituloLogin: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5,
  },
  loginBtn: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  loginTxt: {
    color: '#fff',
    textAlign: 'center',
  },
});
