import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Lanche } from '../types';
import { getImage } from '../utils/getImage';

interface Props {
  lanche: Lanche;
  onAdd: () => void;
}

export default function DetailCard({ lanche, onAdd }: Props) {
  return (
    <View style={styles.detailContainer}>
      <Image source={getImage(lanche.imagem)} style={styles.detailImage} />
      <Text style={styles.detailNome}>{lanche.nome}</Text>
      <Text style={styles.detailDescricao}>{lanche.descricao}</Text>
      <Text style={styles.detailPreco}>{lanche.preco}</Text>
      <TouchableOpacity onPress={onAdd} style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContainer: { flex: 1, alignItems: 'center', padding: 20 },
  detailImage: { width: 200, height: 200, marginBottom: 20, borderRadius: 12 },
  detailNome: { fontSize: 22, fontWeight: 'bold' },
  detailDescricao: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
  detailPreco: { fontSize: 18, color: 'green', marginBottom: 20 },
  addButton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 8 },
  addButtonText: { color: 'white', fontWeight: 'bold' },
});