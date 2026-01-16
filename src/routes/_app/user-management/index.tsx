import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/user-management/')({
  component: () => null,
  beforeLoad: () => {
    throw redirect({ to: '/user-management/drivers' });
  },
});
