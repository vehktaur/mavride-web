import Input from '@/components/form/input';
import AddressInput from '@/components/ui/address-input';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/onboarding/_main/_multi-step-form/company-details',
)({
  component: CompanyDetails,
});

function CompanyDetails() {
  return (
    <>
      <Input
        label="Name"
        name="company_name"
        placeholder="Enter Company's Name"
      />
      <AddressInput
        label="Address"
        name="company_address"
        placeholder="Enter Company's Address"
      />
      <Input
        label="Phone Number"
        name="company_phone"
        placeholder="Enter Company's Phone Number"
        type="tel"
      />
    </>
  );
}
