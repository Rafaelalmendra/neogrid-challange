import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";

interface FavoriteContextProps {
  favorites: any[];
}

interface FavoriteProviderProps {
  favorites: any[];
}

export const FavoriteContext = createContext({} as FavoriteContextProps);

export const FavoriteProvider = (props: FavoriteProviderProps) => {};
