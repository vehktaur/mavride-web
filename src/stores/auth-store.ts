import type { User } from '@/types';
import createDeepMerge from '@fastify/deepmerge';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const deepMerge = createDeepMerge({ all: true });

export type AuthState = {
  isAuthenticated: boolean;
  access_token: string | null;
  refresh_token: string | null;
  user: User | null;
};

export type AuthActions = {
  setAuth: (data?: Partial<AuthState>) => void;
  clearAuth: () => void;
};

export type AuthStore = AuthState & AuthActions;

const createEmptyState = (): AuthState => ({
  isAuthenticated: false,
  access_token: null,
  refresh_token: null,
  user: null,
});

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...createEmptyState(),

      setAuth: (data) =>
        set((state) => ({
          // Preserves existing token if new one isn't provided
          access_token:
            data?.access_token !== undefined
              ? data.access_token
              : state.access_token,
          refresh_token:
            data?.refresh_token !== undefined
              ? data.refresh_token
              : state.refresh_token,

          // Merges user object instead of replacing it entirely
          user:
            data?.user !== undefined
              ? data.user
                ? { ...state.user, ...data.user }
                : null
              : state.user,

          // Auto-calculates auth status based on token presence
          isAuthenticated: Boolean(data?.access_token ?? state.access_token),
        })),

      clearAuth: () => set(() => createEmptyState()),
    }),
    {
      name: 'auth-storage', // localStorage key
      merge: (persisted, current) => deepMerge(current, persisted) as never, // Deep merges saved state
    },
  ),
);

export default useAuthStore;
