import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension';

interface SelectedMountainState {
  selectedMountain: string;
  updateMountain: (newMountain: string) => void;
}

export const useMountainStore = create<SelectedMountainState>()(
  devtools(
    persist(
      (set) => ({
        selectedMountain: 'Mt. Washington',
        updateMountain: (newMountain: string) =>
          set((state) => ({ selectedMountain: newMountain })),
      }),
      {
        name: 'selected-mountain-storage',
      }
    )
  )
);
