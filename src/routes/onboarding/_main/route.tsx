import { createFileRoute, useLocation } from '@tanstack/react-router';
import { MainOnboardingLayout } from '@/components/layout/onboarding';
import BackLink from '@/components/ui/back-link';
import { onboardingRoutes } from '@/lib/constants';

export const Route = createFileRoute('/onboarding/_main')({
  component: EntryLayout,
});

function EntryLayout() {
  const pathname = useLocation({
    select: (loc) => loc.pathname,
  });

  const currentRoute = onboardingRoutes.find((route) => route === pathname);

  return (
    <div className="flex flex-col grow relative">
      <BackLink
        classNames={{ root: 'absolute fl-left-3/24 fl-top-20/30 z-20' }}
        text=""
        to={`/${
          onboardingRoutes[
            Math.max(0, onboardingRoutes.indexOf(currentRoute!) - 1)
          ]
        }`}
      />
      <MainOnboardingLayout />
    </div>
  );
}
