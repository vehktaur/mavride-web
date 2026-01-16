import { StarIcon } from '@/assets/icons';

const RatingLabel = ({ rating }: { rating: number }) => (
  <span className="flex items-center gap-2">
    {rating} Star <StarIcon />
  </span>
);

export const driversTableFilters = [
  {
    label: 'Rating',
    title: 'Filter by rating',
    name: 'rating',
    dropdown: {
      options: [
        { label: <RatingLabel rating={5} />, value: '5' },
        { label: <RatingLabel rating={4} />, value: '4' },
        { label: <RatingLabel rating={3} />, value: '3' },
        { label: <RatingLabel rating={2} />, value: '2' },
        { label: <RatingLabel rating={1} />, value: '1' },
      ],
    },
  },
  {
    label: 'Status',
    title: 'Filter by status',
    name: 'status',

    dropdown: {
      options: [
        { label: 'Active', value: 'Active' },
        { label: 'Offline', value: 'Offline' },
      ],
    },
  },
];
