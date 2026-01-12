import FileInput from '@/components/ui/file-input';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute(
  '/onboarding/_main/_multi-step-form/certifications',
)({
  component: Certifications,
});

function Certifications() {
  return (
    <>
      <FileInput
        label="Health license"
        subtext="Upload your health license"
        name="health_license"
        accept="application/pdf"
      />
      <FileInput
        label="Transport license"
        subtext="Upload your transport license"
        name="transport_license"
        accept="application/pdf"
      />
    </>
  );
}
