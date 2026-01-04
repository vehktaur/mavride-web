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
import { useRef } from 'react';

export const Route = createFileRoute('/onboarding/_main/_multi-step-form')({
  component: OnboardingStepForm,
});

const steps = [
  {
    id: '/onboarding/personal-information',
    heading: 'Personal Information',
    subheading: `Create an account with us and complete verification to get started`,
  },
  {
    id: '/onboarding/location-details',
    heading: 'Enter Location Details',
    subheading: `Enter valid location details to complete registration`,
  },
  {
    id: '/onboarding/company-details',
    heading: 'Company Details',
    subheading: `Enter valid company details to complete registration`,
  },
  {
    id: '/onboarding/certifications',
    heading: 'Upload Valid Certification',
    subheading: 'Upload valid certifications for verification',
  },
] as const;

function OnboardingStepForm() {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });
  const navigate = useNavigate();
  const stepIndex = steps.findIndex((step) => pathname.includes(step.id));

  // Track direction
  const prevStepIndex = useRef(stepIndex);
  const direction = stepIndex > prevStepIndex.current ? 1 : -1;
  prevStepIndex.current = stepIndex == 0 ? -1 : stepIndex - 1;

  // Form
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    if (stepIndex !== steps.length - 1)
      navigate({ to: steps[stepIndex + 1].id });

    console.log(data);
  });

  return (
    <>
      <h1 className="onboarding-heading">{steps[stepIndex].heading}</h1>
      <p className="text-grey-600 clamp-[text,base,lg] mb-8">
        {steps[stepIndex].subheading}
      </p>

      <Form methods={methods} onSubmit={onSubmit}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ x: `${70 * direction}%`, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: `${-70 * direction}%`, opacity: 0 }}
            className="grid gap-5"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>

        <Button size="lg" type="submit" className="mt-14">
          Proceed
        </Button>
      </Form>
    </>
  );
}
