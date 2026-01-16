import {
  OverviewIcon,
  UserIcon,
  CarIcon,
  TruckIcon,
  TransactionsIcon,
  BellIcon,
  MailIcon,
  SupportIcon,
} from '@/assets/icons';
import type { SidebarMenuItem } from '@/types';

export const useSidebarMenu = (): SidebarMenuItem[] => {
  return [
    {
      id: '1',
      title: '',
      items: [
        {
          id: 'overview',
          title: 'Overview',
          Icon: OverviewIcon({}),
          href: '/overview',
        },
        {
          id: 'user-management',
          title: 'User Management',
          isLink: false,
          href: '/user-management',
          Icon: UserIcon({}),
          items: [
            {
              id: 'user-management/drivers',
              title: 'Drivers',
              href: '/user-management/drivers',
            },
            {
              id: 'user-management/members',
              title: 'Members',
              href: '/user-management/members',
            },
          ],
        },
        {
          id: 'trips',
          title: 'Trips',
          Icon: CarIcon({}),
          items: [
            {
              id: 'trips/scheduled-trip',
              title: 'Scheduled Trip',
              href: '/trips/scheduled',
            },
            {
              id: 'trips/completed-trip',
              title: 'Completed Trip',
              href: '/trips/completed',
            },
          ],
        },
        {
          id: 'fleet-management',
          title: 'Fleet Management',
          Icon: TruckIcon({}),
          items: [
            {
              id: 'fleet-management/add-vehicle',
              title: 'Add Vehicle',
              href: '/fleet-management/add-vehicle',
            },
            {
              id: 'fleet-management/assign-vehicle',
              title: 'Assign Vehicle',
              href: '/fleet-management/assign-vehicle',
            },
          ],
        },
        {
          id: 'transactions',
          title: 'Transactions',
          Icon: TransactionsIcon({}),
          href: '/transactions',
        },
        {
          id: 'notifications',
          title: 'Notifications',
          href: '/notifications',
          Icon: BellIcon({}),
        },
        {
          id: 'messages',
          title: 'Messages',
          Icon: MailIcon({}),
          href: '/messages',
        },
        {
          id: 'support',
          title: 'Support',
          Icon: SupportIcon({}),
          href: '/support',
        },
      ],
    },
  ];
};
