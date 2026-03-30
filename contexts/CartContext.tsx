'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
  image?: string;
  country?: string;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  applyDiscount: (code: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const SHIPPING_COST = 9.90;
const DISCOUNT_CODES: Record<string, number> = {
  'MLKGOAL10': 0.10, // 10% de réduction
  'LATAM20': 0.20,   // 20% de réduction
  'FOOTBALL15': 0.15, // 15% de réduction
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState<string>('');

  // Charger le panier depuis localStorage au démarrage
  useEffect(() => {
    const savedCart = localStorage.getItem('mlkgoal-cart');
    const savedDiscount = localStorage.getItem('mlkgoal-discount');
    
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart);
        }
      } catch (error) {
        console.error('Erreur de lecture du panier:', error);
      }
    }

    if (savedDiscount) {
      try {
        const parsedDiscount = JSON.parse(savedDiscount);
        setDiscount(parsedDiscount.discount || 0);
        setDiscountCode(parsedDiscount.code || '');
      } catch (error) {
        console.error('Erreur de lecture de la réduction:', error);
      }
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('mlkgoal-cart', JSON.stringify(items));
    localStorage.setItem('mlkgoal-discount', JSON.stringify({ discount, code: discountCode }));
  }, [items, discount, discountCode]);

  // Calculs
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const shipping = items.length > 0 ? SHIPPING_COST : 0;
  const discountAmount = subtotal * discount;
  const total = Math.max(0, subtotal + shipping - discountAmount);

  // Fonctions
  const addItem = (newItem: CartItem) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id && item.size === newItem.size && item.color === newItem.color);
      
      if (existingItem) {
        // Mettre à jour la quantité si l'article existe déjà
        return currentItems.map(item =>
          item.id === newItem.id && item.size === newItem.size && item.color === newItem.color
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        // Ajouter un nouvel article
        return [...currentItems, newItem];
      }
    });
  };

  const removeItem = (id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscount(0);
    setDiscountCode('');
  };

  const applyDiscount = (code: string): boolean => {
    const discountRate = DISCOUNT_CODES[code.toUpperCase()];
    
    if (discountRate !== undefined) {
      setDiscount(discountRate);
      setDiscountCode(code.toUpperCase());
      return true;
    }
    
    return false;
  };

  const value: CartContextType = {
    items,
    totalItems,
    subtotal,
    shipping,
    discount: discountAmount,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    applyDiscount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart doit être utilisé dans un CartProvider');
  }
  return context;
}