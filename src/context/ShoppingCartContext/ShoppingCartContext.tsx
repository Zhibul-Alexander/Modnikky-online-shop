import {createContext, ReactNode, useContext} from 'react';

import {useLocalStorage} from '../../hooks/useLocalStorage/useLocalStorage';
import Catalog from '../../types/api/catalog';

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: string
  options: {
    quantity: number
    size: string
  }
}

type ShoppingCartContext = {
  getItemQuantity: (id: string, size: string) => number
  increaseCartQuantity: (id: string, size: string) => void
  decreaseCartQuantity: (id: string, size: string) => void
  removeFromCart: (id: string, size: string) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.options.quantity + quantity, 0,
  );

  function getItemQuantity(id: string, size: string) {
    return cartItems.filter(item => item.id === id).find(item => item.options.size === size)?.options.quantity || 0;
    // return cartItems.find(item => item.id === id)?.options.quantity || 0;
  }

  function increaseCartQuantity(id: string, size: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id && item.options.size === size) == null) {
        return [...currItems, {id, options: {quantity: 1, size: size}}];
      } else {
        return currItems.map(item => {
          if (item.id === id && item.options.size === size) {
            return {...item, options: {quantity: item.options.quantity + 1, size: item.options.size}};
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: string, size: string) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.options.quantity === 1 && currItems.find(item => item.options.size === size)) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id && item.options.size === size) {
            return {...item, options: {quantity: item.options.quantity - 1, size: item.options.size}};
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string, size: string) {
    setCartItems(currItems => {
      const deleteCart = currItems.filter(item => (item.id === id)).find(item => item.options.size === size);
      if (!deleteCart) {
        return currItems;
      }
      return currItems.filter(item => item !== deleteCart);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}