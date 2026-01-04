import { Logo } from '@/assets/svgs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      Home
      <Logo />
    </div>
  )
}
