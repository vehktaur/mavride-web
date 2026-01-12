import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/onboarding')({
  component: Onboarding,
});

function Onboarding() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen flex flex-col w-full">
      <Outlet />
    </div>
  );
}
