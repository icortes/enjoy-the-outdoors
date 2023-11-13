'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';

interface SearchByState {
  searchBy: string;
  updateSearchBy: (newSearchBy: string) => void;
}

export const useSearchByStore = create<SearchByState>()(
  devtools(
    persist(
      (set) => ({
        searchBy: 'by location',
        updateSearchBy: (newSearchBy: string) =>
          set((state) => ({ searchBy: newSearchBy })),
      }),
      {
        name: 'search-by-storage',
      }
    )
  )
);
