import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';

interface SelectedParkTypeState {
  selectedParkType: string;
  updateParkType: (newState: string) => void;
}

export const useSelectedParkTypeStore = create<SelectedParkTypeState>()(
  devtools(
    persist(
      (set) => ({
        selectedParkType: 'All',
        updateParkType: (newParkType: string) =>
          set((state) => ({ selectedParkType: newParkType })),
      }),
      {
        name: 'selected-park-type-storage',
      }
    )
  )
);
