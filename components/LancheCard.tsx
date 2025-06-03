import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Lanche } from '../types';
import { getImage } from '../utils/getImage';

interface Props {
  lanche: Lanche;
  onPress: () => void;
}

export default function LancheCard({ lanche, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={getImage(lanche.imagem)} style={styles.foto} />
      <Text style={styles.nome}>{lanche.nome}</Text>
      <Text style={styles.preco}>{lanche.preco}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  nome: {
    flex: 1,
    fontSize: 16,
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});