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

type FavoriteItem = {
  id: string
}

type ShoppingCartContext = {
  getItemQuantity: (id: string, size: string) => number
  increaseCartQuantity: (id: string, size: string) => void
  decreaseCartQuantity: (id: string, size: string) => void
  removeFromCart: (id: string, size: string) => void
  cartQuantity: number
  cartItems: CartItem[]
  clearAllCart: () => void

  favoritesItems: FavoriteItem[]
  clickFavoriteItem: (id: string) => void
  removeFavoriteItem: (id: string) => void
  selectQuantity: (id: string, size: string, quantity: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', []);
  const [favoritesItems, setFavoritesItems] = useLocalStorage<FavoriteItem[]>('shopping-like', []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.options.quantity + quantity, 0,
  );

  function getItemQuantity(id: string, size: string) {
    return cartItems.filter(item => item.id === id).find(item => item.options.size === size)?.options.quantity || 0;
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

  function clearAllCart() {
    return setCartItems([]);
  }

  function clickFavoriteItem(id: string) {
    setFavoritesItems(favoritesItems => {
      if (favoritesItems.find(item => item.id === id) == null) {
        return [...favoritesItems, {id}];
      } else {
        const deleteLikeItem = favoritesItems.find(item => (item.id === id));
        if (!deleteLikeItem) {
          return favoritesItems;
        }
        return favoritesItems.filter(item => item !== deleteLikeItem);
      }
    });
  }

  function removeFavoriteItem(id: string) {
    setFavoritesItems(favoritesItems => {
      const deleteItem = favoritesItems.find(item => (item.id === id));
      if (!deleteItem) {
        return favoritesItems;
      }
      return favoritesItems.filter(item => item !== deleteItem);
    });
  }

  function selectQuantity(id: string, size: string, quantity: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id && item.options.size === size) == null) {
        return [...currItems, {id, options: {quantity: quantity, size: size}}];
      } else {
        return currItems;
      }
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
        clearAllCart,
        favoritesItems,
        clickFavoriteItem,
        removeFavoriteItem,
        selectQuantity,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}