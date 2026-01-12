import Form from '@/components/form';
import PictureUpload from '@/components/form/picture-upload';
import { Button } from '@/components/ui/button';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useForm, useFormState } from 'react-hook-form';
import * as z from 'zod';
import { profilePicSchema as schema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import useOnboardingStore from '@/stores/onboarding';

export const Route = createFileRoute('/onboarding/_main/profile-picture')({
  component: ChooseProfilePic,
});

type FormData = z.infer<typeof schema>;

function ChooseProfilePic() {
  const navigate = useNavigate();
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isValid } = useFormState({
    control: methods.control,
    name: 'profile_pic',
  });

  const setData = useOnboardingStore((state) => state.setData);

  const onSubmit = methods.handleSubmit((data) => {
    setData(data);
    navigate({ to: '/onboarding/personal-information' });
  });

  return (
    <>
      <h1 className="onboarding-heading mb-5 -mt-16">Choose Photo</h1>
      <p className="fl-text-xs/sm text-grey-600 mb-8">
        Upload a photo for your profile picture. <br /> It can be changed later.
      </p>

      <Form
        methods={methods}
        onSubmit={onSubmit}
        className="flex flex-col items-center"
      >
        <PictureUpload name="profile_pic" className="size-37.5 fl-mb-5/8" />
        <h2 className="font-medium fl-text-base/lg mb-2">
          Choose profile picture
        </h2>
        <p className="fl-text-xs/sm text-grey-600 mb-20">
          Your photo is used to identify you on the stay
        </p>

        <Button size="lg" type="submit" className="w-full" disabled={!isValid}>
          Proceed
        </Button>
      </Form>
    </>
  );
}
