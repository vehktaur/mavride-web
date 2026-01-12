import createDeepMerge from '@fastify/deepmerge';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const deepMerge = createDeepMerge({ all: true });

export type OnboardingState = {
  profile_pic: File | null;

  // Personal Information
  fullname: string;
  gender: string;
  email: string;
  password: string;

  // Company Details
  company_name: string;
  company_address: string;
  company_phone: string;

  // Location Details
  state: string;
  city: string;
  address: string;

  // Certifications
  health_license: File | null;
  transport_license: File | null;
};

export type OnboardingActions = {
  setData: (data: Partial<OnboardingState>) => void;
  clearData: () => void;
};

export type OnboardingStore = OnboardingState & OnboardingActions;

const createEmptyState = (): OnboardingState => ({
  profile_pic: null,
  fullname: '',
  gender: '',
  email: '',
  password: '',
  company_name: '',
  company_address: '',
  company_phone: '',
  state: '',
  city: '',
  address: '',
  health_license: null,
  transport_license: null,
});

const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      // Initial state values
      ...createEmptyState(),

      // Actions
      setData: (data) => set((state) => ({ ...state, ...data })),

      clearData: () => set(() => createEmptyState()),
    }),
    {
      name: 'onboarding-storage',
      merge: (persisted, current) => deepMerge(current, persisted) as never,
    },
  ),
);

export default useOnboardingStore;
