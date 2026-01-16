export const clampProps = [
  // Padding
  'p',
  'px',
  'py',
  'pt',
  'pb',
  'pl',
  'pr',
  'ps',
  'pe',
  // Margin
  'm',
  'mx',
  'my',
  'mt',
  'mb',
  'ml',
  'mr',
  'ms',
  'me',
  // Width/Height
  'w',
  'h',
  'min-w',
  'max-w',
  'min-h',
  'max-h',
  // Space
  'space-x',
  'space-y',
  // Gap
  'gap',
  'gap-x',
  'gap-y',
  // Inset
  'inset',
  'inset-x',
  'inset-y',
  'top',
  'right',
  'bottom',
  'left',
  // Text
  'text',
  'leading',
  // Border
  'rounded',
] as const;

export const onboardingSlides = [
  {
    id: '001',
    heading: 'Compassionate & Timely',
    text: 'Powered by cutting-edge technology and a steadfast commitment to providing safe and secure transportation services.',
  },
  {
    id: '002',
    heading: 'Integrity & Innovation',
    text: 'Powered by cutting-edge technology and a steadfast commitment to providing safe and secure transportation services.',
  },
] as const;

export const nonStates = [
  'American Samoa',
  'Baker Island',
  'District of Columbia',
  'Guam',
  'Howland Island',
  'Jarvis Island',
  'Johnston Atoll',
  'Kingman Reef',
  'Midway Atoll',
  'Navassa Island',
  'Northern Mariana Islands',
  'Palmyra Atoll',
  'Puerto Rico',
  'United States Minor Outlying Islands',
  'United States Virgin Islands',
  'Wake Island',
];

export const onboardingProfileSteps = [
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

export const onboardingRoutes = [
  'onboarding/verify-phone',
  'onboarding/profile-picture',
  ...onboardingProfileSteps.map((step) => step.id),
] as const;

export * from './filters';
