import { Post } from '@/models/Post'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { v4 } from 'uuid'
interface UserStateStore {
  isAddPostModalOpen: boolean
  openAddPostModal: () => void
  closeAddPostModal: () => void
}

export const useUserStateStore = create<UserStateStore>((set) => ({
  isAddPostModalOpen: false,
  openAddPostModal: () => set(() => ({ isAddPostModalOpen: true })),
  closeAddPostModal: () => set(() => ({ isAddPostModalOpen: false })),
}))

interface PostModalStore {
  postData?: Post
  openPostModal: (postData: Post) => void
  closePostModal: () => void
}

export const usePostModal = create<PostModalStore>((set) => ({
  postData: undefined,
  openPostModal: (postData) => set(() => ({ postData })),
  closePostModal: () => set(() => ({ postData: undefined })),
}))

interface UserDataStore {
  userId: string | undefined
  createUser: () => void
}

export const useUserDataStore = create(
  persist<UserDataStore>(
    (set) => ({
      userId: undefined,
      createUser: () => set(() => ({ userId: v4() })),
    }),
    {
      name: 'user-data-storage',
    }
  )
)
