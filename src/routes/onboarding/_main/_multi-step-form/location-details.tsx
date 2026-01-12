import { FormSelect as Select } from '@/components/ui/select';
import { createFileRoute } from '@tanstack/react-router';
import { useFormContext, useWatch } from 'react-hook-form';
import { City, State } from 'country-state-city';
import { nonStates } from '@/lib/constants';
import AddressInput from '@/components/ui/address-input';

export const Route = createFileRoute(
  '/onboarding/_main/_multi-step-form/location-details',
)({
  component: LocationDetails,
});

function LocationDetails() {
  const { setValue } = useFormContext();
  const statesUS = State.getStatesOfCountry('US');

  //Get all the valid states from csc
  const states = statesUS
    .map((state) => ({ value: state.name }))
    .filter((state) => !nonStates.includes(state.value));

  const chosenState = useWatch({ name: 'state' });
  const isoCode = statesUS.find((state) => state.name === chosenState)?.isoCode;

  //Get the cities for the particular state chosen
  const cities = isoCode
    ? City.getCitiesOfState('US', isoCode).map((city) => ({ value: city.name }))
    : [];

  return (
    <>
      <Select
        label="State"
        name="state"
        placeholder="Enter State"
        options={states}
        onChange={() => {
          setValue('city', '');
        }}
      />
      <Select
        label="City"
        name="city"
        placeholder="Enter City"
        options={cities}
        emptyPlaceholder="Please select a state"
      />
      <AddressInput
        label="Address"
        name="address"
        placeholder="Enter Address"
      />
    </>
  );
}
