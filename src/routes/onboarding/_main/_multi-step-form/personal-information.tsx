import Input from '@/components/form/input';
import { FormSelect as Select } from '@/components/ui/select';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/onboarding/_main/_multi-step-form/personal-information',
)({
  component: PersonalInfo,
});

function PersonalInfo() {
  return (
    <>
      <Input
        label="Full Name"
        name="fullname"
        placeholder="Enter Full Name"
        required={true}
      />

      <Select
        label="Gender"
        name="gender"
        placeholder="Gender"
        options={[{ value: 'Male' }, { value: 'Female' }, { value: 'Others' }]}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="Enter Email Address"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter Password"
      />
      <Input
        label="Confirm Password"
        name="confirm_password"
        type="password"
        placeholder="Confirm Password"
      />
    </>
  );
}
