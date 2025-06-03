// contexts/CartContext.tsx
import React, { createContext } from 'react';
import { Lanche } from '../types';

export type CartContextType = {
  cart: Lanche[];
  setCart: React.Dispatch<React.SetStateAction<Lanche[]>>;
  addToCart: (lanche: Lanche) => void;
  removeFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});

