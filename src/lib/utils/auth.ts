import { useAuthStore } from '@/stores';
import type { User, UserRole } from '@/types';
import { redirect } from '@tanstack/react-router';

// Auth guard function
export const requireAuth = (
  ctx: {
    location: { href: string };
    context: { auth: { isAuthenticated: boolean; user: User } };
  },
  redirectTo: string = '/sign-in',
) => {
  const {
    context: {
      auth: { isAuthenticated },
    },
    location: { href },
  } = ctx;

  if (!isAuthenticated) {
    throw redirect({
      to: redirectTo,
      search: {
        redirect: href,
      },
    });
  }
};

// Role-based auth guard
export const requireRole = (allowedRoles: UserRole[]) => {
  const { user, isAuthenticated } = useAuthStore.getState();

  if (!isAuthenticated || !user) {
    throw redirect({ to: '/sign-in' });
  }

  if (!allowedRoles.some((role) => user.roles.includes(role))) {
    throw redirect({ to: '/' });
  }
};
