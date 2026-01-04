import { Link } from '@tanstack/react-router'
import { cn } from '../../lib/utils'
import { LuArrowLeft } from '@/assets/icons'

interface BackLinkProps extends React.ComponentProps<typeof Link> {
  text?: string
}

const BackLink = ({ className, text = 'Back', ...props }: BackLinkProps) => {
  return (
    <Link className={cn('flex items-center gap-2', className)} {...props}>
      <LuArrowLeft className="w-4" />
      {text}
    </Link>
  )
}
export default BackLink
