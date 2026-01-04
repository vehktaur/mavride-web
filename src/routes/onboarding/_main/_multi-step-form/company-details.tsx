import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/onboarding/_main/_multi-step-form/company-details',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/onboarding/_main/_multi-step-form/company-details"!</div>
}
