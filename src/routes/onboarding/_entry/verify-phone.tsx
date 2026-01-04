import Form from '@/components/form'
import Input from '@/components/form/input'
import { verifyPhoneSchema } from '@/lib/schemas'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { AppInputOtp } from '@/components/form/input-otp'

export const Route = createFileRoute('/onboarding/_entry/verify-phone')({
  component: VerifyPhonePage,
})

const steps = [
  {
    id: 0,
    title: 'Your Phone Number',
    submitText: 'Proceed',
  },
  {
    id: 1,
    title: 'OTP',
    submitText: 'Verify',
  },
]

function VerifyPhonePage() {
  const [step, setStep] = useState(0)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()
  const schema = verifyPhoneSchema(step)
  const methods = useForm({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  })

  const onSubmit = methods.handleSubmit((data) => {
    if (step === 0) {
      setStep(1)
      return
    }
    console.log(data)
    setSuccess(true)
  })

  return (
    <>
      <div className="text-center">
        <h2 className="mb-1 onboarding-heading">Enter {steps[step].title}</h2>
        <p className="text-grey-400 clamp-[text,sm,lg]">
          We will send an OTP to the number <br />
        </p>
      </div>

      <Form
        methods={methods}
        onSubmit={onSubmit}
        className="w-full mt-8 space-y-12"
      >
        {step === 0 ? (
          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter Phone Number"
          />
        ) : (
          <div>
            <AppInputOtp name="otp" length={4} disabled={success} />
            <Countdown success={success} />
          </div>
        )}
        {success ? (
          <Button
            size="lg"
            type="button"
            onClick={() => navigate({ to: '/onboarding/profile-picture' })}
          >
            Proceed
          </Button>
        ) : (
          <Button size="lg" type="submit">
            {steps[step].submitText}
          </Button>
        )}
      </Form>
    </>
  )
}

function Countdown({ success }: { success: boolean }) {
  const [countdown, setCountdown] = useState(30)
  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [countdown])

  const handleResend = () => {
    setCountdown(30)
    // Add your resend OTP logic here
  }

  return (
    <p className="text-sm mt-4">
      {success ? (
        <strong className="font-bold text-primary">
          Verification successful
        </strong>
      ) : countdown > 0 ? (
        <>
          Resend code in{' '}
          <strong className="font-bold text-primary">{countdown}sec</strong>
        </>
      ) : (
        <>
          Didn't receive code?{' '}
          <button
            type="button"
            onClick={handleResend}
            className="font-bold text-primary hover:underline underline-offset-1"
          >
            Resend
          </button>
        </>
      )}
    </p>
  )
}
