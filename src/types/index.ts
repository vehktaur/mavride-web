import type { IconType } from 'react-icons/lib';

export * from './auth';
export * from './input';

export type Response = {
  message: string;
};

export interface SidebarMenuItem {
  id: string;
  title: string;
  href?: string;
  Icon?: React.ReactNode | IconType;
  classNames?: Partial<{
    root: string;
    item: string;
  }>;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  isActive?: boolean | 'exact';
  isLink?: boolean;
  isPending?: boolean;
  items?: SidebarMenuItem[];
  hidden?: boolean;
  tooltip?: string;
}
