import { createFileRoute } from '@tanstack/react-router'
import { Aside, MainOnboardingLayout } from '@/components/layout/onboarding'

export const Route = createFileRoute('/onboarding/_entry')({
  component: EntryLayout,
})

function EntryLayout() {
  return (
    <div className="flex h-dvh p-5 overflow-hidden *:size-full gap-10">
      <Aside />
      <MainOnboardingLayout showLogoOnDesktop={false} />
    </div>
  )
}
