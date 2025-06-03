import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import DetailCard from '../components/DetailCard';

export default function DetailScreen({ route }: any) {
  const { lanche } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <DetailCard lanche={lanche} onAdd={() => addToCart(lanche)} />
  );
}