import Form from '@/components/form';
import Input from '@/components/form/input';
import { MainOnboardingLayout } from '@/components/layout/onboarding';
import { Button } from '@/components/ui/button';
import { loginSchema } from '@/lib/schemas/auth-schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { createFileRoute, Link } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

export const Route = createFileRoute('/sign-in')({
  component: SignInPage,
});

function SignInPage() {
  const methods = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <MainOnboardingLayout>
      <h1 className="onboarding-heading">Sign in</h1>
      <p className="text-grey-600 fl-text-base/lg mb-8">
        Please enter your credentials to log in <br /> and continue
      </p>
      <Form methods={methods} onSubmit={onSubmit}>
        <div className="grid gap-4 mb-7.25">
          <Input
            name="phone_number"
            label="Phone Number"
            type="tel"
            placeholder="Phone Number"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="flex items-center justify-between flex-col mb-9">
          <p>Forgot your password?</p>
          <Link to="." className="text-primary font-semibold">
            Reset Password
          </Link>
        </div>
        <Button size="lg" type="submit">
          Sign in
        </Button>
      </Form>
    </MainOnboardingLayout>
  );
}
