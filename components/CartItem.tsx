import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Lanche } from '../types';

interface Props {
  lanche: Lanche;
  onRemove: () => void;
}

export default function CartItem({ lanche, onRemove }: Props) {
  return (
    <View style={styles.itemBox}>
      <Text style={styles.itemText}>{lanche.nome} - {lanche.preco}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.remove}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  itemText: {
    fontSize: 16,
  },
  remove: {
    color: 'red',
    fontWeight: 'bold',
  },
});