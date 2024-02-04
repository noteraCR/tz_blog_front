import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import handleError from '@/functions/errors';
import { Post } from '..';

export interface IGetData {
  data: Post[] | null
  error: string | null
  getData: (url: string) => Promise<Post[] | null>
  getPostsByPageDesc: (page: number) => Promise<Post[] | null>
}
export const useStore = create<IGetData>()(
  devtools(
    persist(
      (set) => ({
        data: null,
        error: null,
        getData: async (url: string) => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            set({ data, error: null });
            return data;
          } catch (e) {
            const error = handleError({ e });
            set({ data: null, error });
            return null;
          }
        },
        getPostsByPageDesc: async (page: number) => {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&_sort=id&_order=desc`,
            );
            const data = await response.json();
            set({ data, error: null });
            return data;
          } catch (e) {
            const error = handleError({ e });
            set({ data: null, error });
            return null;
          }
        },
      }),
      {
        name: 'get-data',
      },
    ),
  ),
);
