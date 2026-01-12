import type { InputProps } from '@/types';
import { useApiIsLoaded, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useEffect, useRef } from 'react';
import { Controller } from 'react-hook-form';
import Input from '@/components/form/input';

function AddressInput({
  name,
  onPlaceSelect,
  ...props
}: InputProps & {
  onPlaceSelect?: (place: unknown) => void;
}) {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value = '' } }) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const places = useMapsLibrary('places');
        const isLoaded = useApiIsLoaded();

        useEffect(() => {
          if (!places || !inputRef.current) return;

          const options = {
            fields: [
              'formatted_address',
              'geometry',
              'name',
              'address_components',
            ],
            types: ['address'],
          };

          const autocompleteInstance = new places.Autocomplete(
            inputRef.current,
            options,
          );

          const listener = autocompleteInstance.addListener(
            'place_changed',
            () => {
              const place = autocompleteInstance.getPlace();

              if (place.formatted_address) {
                onChange(place.formatted_address);

                if (onPlaceSelect) {
                  onPlaceSelect({
                    address: place.formatted_address,
                    name: place.name,
                    location: place.geometry?.location
                      ? {
                          lat: place.geometry.location.lat(),
                          lng: place.geometry.location.lng(),
                        }
                      : null,
                    addressComponents: place.address_components,
                  });
                }
              }
            },
          );

          return () => {
            if (listener) {
              places.event?.removeListener(listener);
            }
          };
        }, [places, onPlaceSelect]);

        return (
          <Input
            ref={inputRef}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={!isLoaded}
            controlled
            autoComplete="new-password"
            {...props}
          />
        );
      }}
    />
  );
}

export default AddressInput;
