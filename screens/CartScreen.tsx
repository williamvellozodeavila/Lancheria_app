import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import { Lanche } from '../types';

export default function CartScreen() {
  const { cart, setCart } = useContext(CartContext);

  function removerItem(index: number) {
    const novoCarrinho = [...cart];
    novoCarrinho.splice(index, 1);
    setCart(novoCarrinho);
  }

  function finalizarCompra() {
    if (cart.length === 0) {
      Alert.alert('Carrinho vazio', 'Adicione itens antes de finalizar.');
      return;
    }

    const mensagem = cart
      .map((lanche: Lanche, i: number) => `${i + 1}. ${lanche.nome} - ${lanche.preco}`)
      .join('\n');

    const textoFinal = `Olá! Gostaria de fazer o seguinte pedido:\n${mensagem}`;
    const url = `https://wa.me/53991145562?text=${encodeURIComponent(textoFinal)}`;

    Linking.openURL(url).catch(() =>
      Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.')
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Meu Carrinho
      </Text>

      {cart.length === 0 ? (
        <Text style={{ fontSize: 16 }}>Seu carrinho está vazio.</Text>
      ) : (
        <>
          {cart.map((lanche: Lanche, index: number) => (
            <CartItem key={`item-${index}`} lanche={lanche} onRemove={() => removerItem(index)} />
          ))}

          <TouchableOpacity
            onPress={finalizarCompra}
            style={{
              backgroundColor: '#25D366',
              padding: 12,
              borderRadius: 8,
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
              Finalizar Pedido no WhatsApp
            </Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
}
