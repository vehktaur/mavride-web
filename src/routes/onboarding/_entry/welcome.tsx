import { Button } from '@/components/ui/button';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/onboarding/_entry/welcome')({
  component: OnboardingEntry,
});

function OnboardingEntry() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="fl-text-2xl/4xl font-bold text-mavride-violet mb-2">
        Let&apos;s Get You Started
      </h2>
      <p className="text-grey-400 mb-16">Create an Account with Us</p>

      <Button
        onClick={() => {
          navigate({ to: '/onboarding/verify-phone' });
        }}
        className="w-full mb-4"
        size="lg"
      >
        Sign Up
      </Button>

      <p className="mt-4 text-grey-400">
        Already have an Account?{' '}
        <Link to="/" className="text-primary hover:underline">
          Sign In
        </Link>
      </p>
    </>
  );
}
