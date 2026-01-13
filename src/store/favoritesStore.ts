import { create } from "zustand";
import { SaavnSong } from "../api/saavn";

type FavoritesStore = {
  favorites: SaavnSong[];
  addToFavorites: (song: SaavnSong) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
  favorites: [],

  addToFavorites: (song) =>
    set((state) => {
      const exists = state.favorites.find((s) => s.id === song.id);
      if (exists) return state; // duplicate avoid
      return { favorites: [...state.favorites, song] };
    }),

  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((s) => s.id !== id),
    })),

  isFavorite: (id) => {
    return get().favorites.some((s) => s.id === id);
  },
}));
