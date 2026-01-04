import { cn } from '@/lib/utils'
import {
  FormProvider,
  type UseFormReturn,
  type FieldValues,
} from 'react-hook-form'

const Form = <T extends FieldValues>({
  methods,
  children,
  className,
  onSubmit,
}: {
  methods: UseFormReturn<T>
  children: React.ReactNode
  className?: string
  onSubmit?: React.FormEventHandler<HTMLFormElement>
}) => {
  return (
    <FormProvider {...methods}>
      <form className={cn(className)} onSubmit={onSubmit} noValidate>
        {children}
      </form>
    </FormProvider>
  )
}
export default Form
