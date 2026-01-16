import type { Response } from '.';

export type UserRole = 'admin' | 'user' | 'driver' | 'manager';

export interface User {
  id: string;
  address: string;
  city: string;
  driver_info: string;
  email: string;
  email_verified: boolean;
  fullname: string;
  gender: string;
  is_active: boolean;
  phone_number: string;
  phone_number_verified: boolean;
  roles: UserRole[];
  state: string;
}

export interface LoginResponse extends Response {
  accessToken: string;
  refreshToken: string;
  data: User;
}

export interface RefreshTokenResponse extends Response {
  access_token: string;
}
