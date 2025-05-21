import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type DetalheRouteProp = RouteProp<RootStackParamList, 'Detalhes do Lanche'>;

type Props = {
  route: DetalheRouteProp;
};

export default function Detalhe({ route }: Props) {
  const { lanche } = route.params;

  return (
    <View style={styles.container}>
      <Image source={lanche.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{lanche.nome}</Text>
      <Text style={styles.descricao}>{lanche.descricao}</Text>
      <Text style={styles.preco}>{lanche.preco}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center' },
  imagem: { width: 200, height: 200, borderRadius: 10, marginBottom: 20 },
  nome: { fontSize: 22, fontWeight: 'bold' },
  descricao: { fontSize: 16, marginVertical: 10, textAlign: 'center' },
  preco: { fontSize: 18, fontWeight: 'bold', color: 'green' },
});
