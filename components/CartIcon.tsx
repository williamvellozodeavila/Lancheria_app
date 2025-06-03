import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { CartContext } from '../contexts/CartContext'; 
type Props = {
  onPress: () => void;
};

export default function CartIcon({ onPress }: Props) {
  const { cart } = useContext(CartContext);

  return (
    <TouchableOpacity onPress={onPress} style={{ padding: 10 }}>
      <Text style={{ fontWeight: 'bold', color: '#007AFF' }}>
        🛒 {cart.length > 0 ? `(${cart.length})` : ''}
      </Text>
    </TouchableOpacity>
  );
}
