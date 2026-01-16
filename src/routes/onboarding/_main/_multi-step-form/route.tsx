import Form from '@/components/form';
import { Button } from '@/components/ui/button';
import {
  createFileRoute,
  Outlet,
  useLocation,
  useNavigate,
} from '@tanstack/react-router';
import { AnimatePresence, motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { onboardingProfileSteps as steps } from '@/lib/constants';
import { useOnboardingStore } from '@/stores';
import { useShallow } from 'zustand/react/shallow';
import { getMultiStepSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import SuccessModal from '@/components/ui/success-modal';

export const Route = createFileRoute('/onboarding/_main/_multi-step-form')({
  component: OnboardingStepForm,
});

function OnboardingStepForm() {
  const [success, setSuccess] = useState(false);
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const navigate = useNavigate();
  const stepIndex = steps.findIndex((step) => pathname.includes(step.id));
  const isLastStep = stepIndex === steps.length - 1;

  // Store
  const defaultValues = useOnboardingStore(
    useShallow((state) => {
      const { setData, clearData, ...formState } = state;
      return formState;
    }),
  );
  const setData = useOnboardingStore((state) => state.setData);

  // Form
  const schema = getMultiStepSchema(steps[stepIndex].id);
  type FormData = z.infer<typeof schema>;
  const methods = useForm<FormData>({
    defaultValues,
    resolver: zodResolver(schema),
  });
  const onSubmit = methods.handleSubmit((data) => {
    if (!isLastStep) {
      setData(data);
      navigate({ to: steps[stepIndex + 1].id });
      return;
    }

    setSuccess(true);
  });

  return (
    <>
      {success && (
        <SuccessModal
          message="Your registration was successful. Now, please log in with your email and password to get started"
          to="/login"
        />
      )}

      <h1 className="onboarding-heading">{steps[stepIndex].heading}</h1>
      <p className="text-grey-600 fl-text-base/lg mb-8">
        {steps[stepIndex].subheading}
      </p>

      <Form methods={methods} onSubmit={onSubmit}>
        <AnimatePresence mode="wait">
          <motion.div key={pathname} className="grid gap-5">
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <Button size="lg" type="submit" className="mt-14">
          {isLastStep ? 'Next' : 'Proceed'}
        </Button>
      </Form>
    </>
  );
}
