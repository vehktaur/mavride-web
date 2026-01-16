import api from '@/lib/api/axios';
import { AUTH_EPS } from '@/lib/api/endpoints';
import type { LoginResponse } from '@/types';
import type { MutationOptions } from '@tanstack/react-query';

interface Props {
  phone_number: string;
  password: string;
}

export const login = async ({ phone_number, password }: Props) => {
  const res = await api.post<LoginResponse>(AUTH_EPS.LOGIN['PROVIDER'], {
    phone_number,
    password,
  });

  return res.data;
};

export const useLoginOptions = (data: Props): MutationOptions => {
  return {
    mutationFn: () => login(data),
  };
};
