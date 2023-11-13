'use client';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';

interface SelectedStateState {
  selectedState: string;
  updateState: (newState: string) => void;
}

export const useSelectedStateStore = create<SelectedStateState>()(
  devtools(
    persist(
      (set) => ({
        selectedState: 'All',
        updateState: (newState: string) => set((state) => ({ selectedState: newState })),
      }),
      {
        name: 'selected-state-storage',
      }
    )
  )
);
