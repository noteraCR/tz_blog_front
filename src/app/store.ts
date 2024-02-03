import { create } from 'zustand'

interface UserStateStore {
    isAddPostModalOpen: boolean
    openAddPostModal: () => void
    closeAddPostModal: () => void
  }

export const useUserStateStore = create<UserStateStore>((set) => ({
    isAddPostModalOpen: false,
    openAddPostModal: () => set(() => ({isAddPostModalOpen: true})),
    closeAddPostModal: () => set(() => ({isAddPostModalOpen: false}))
}))