import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Post } from '..'

export interface IGetData {
  data: Post[] | null
  error: null
  getData: (url: string) => Promise<Post[] | null>
}
export const useStore = create<IGetData>()(
  devtools(
    persist(
      (set) => ({
        data: null,
        error: null,
        getData: async (url: string) => {
          try {
            const response = await fetch(url)
            const data = await response.json()
            set({ data, error: null })
            return data;
          } catch (error: any) {
            set({ data: null, error: error.message })
            return null;
          }
        },
      }),
      {
        name: 'get-data',
      }
    )
  )
)
