import { cn } from '@/lib/utils'
import type { Size } from '@/types'
import { motion } from 'motion/react'
import { Activity } from 'react'
import { useFormState } from 'react-hook-form'

const FormErrorMessage = ({
  name,
  id,
  size,
  className,
}: {
  name: string
  id: string
  size?: Size
  className?: string
}) => {
  const { errors } = useFormState({ name })
  return (
    <Activity mode={errors?.[name]?.message ? 'visible' : 'hidden'}>
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.2 }}
        id={id}
        className={cn(
          'text-error-red mt-1 text-start clamp-[text,xs,sm]',
          {
            'text-xs': size === 'sm' || size === 'md',
          },
          className,
        )}
      >
        {String(errors?.[name]?.message)}
      </motion.p>
    </Activity>
  )
}
export default FormErrorMessage
