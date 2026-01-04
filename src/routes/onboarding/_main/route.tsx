import { createFileRoute } from '@tanstack/react-router'
import { MainOnboardingLayout } from '@/components/layout/onboarding'

export const Route = createFileRoute('/onboarding/_main')({
  component: EntryLayout,
})

function EntryLayout() {
  return <MainOnboardingLayout />
}
