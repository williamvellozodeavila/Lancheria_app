import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function HeaderSection() {
  return (
    <View style={styles.logoDescricaoContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.descricaoBonita}>
        Bem-vindo à {'\n'}<Text style={{ fontWeight: 'bold' }}>A&M Lanches</Text>!{''}{'\n'}
        Uma nova especialidade em sabor e qualidade!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoDescricaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  descricaoBonita: {
    flex: 1,
    fontSize: 16,
    textAlign: 'left',
    color: '#333',
    lineHeight: 22,
  },
});