import {
  BellIcon,
  ChangePasswordIcon,
  LogoutIcon,
  UserSettingsIcon,
} from '@/assets/icons';
import { FaCaretDown } from 'react-icons/fa6';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export const AppHeader = () => {
  const profileMenuItems = [
    { id: 'manage-account', label: 'Manage Account', Icon: UserSettingsIcon },
    {
      id: 'change-password',
      label: 'Change Password',
      Icon: ChangePasswordIcon,
    },
    { id: 'logout', label: 'Log out', Icon: LogoutIcon },
  ];

  return (
    <header className="flex items-center w-full sticky top-0 pt-4 pb-6 justify-end fl-px-5/8 bg-white">
      <div className="flex items-center gap-7">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BellIcon className="text-grey-600 size-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>Notifications</DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex items-center gap-2.5 cursor-pointer"
            asChild
          >
            <div>
              <div className="size-9.5 bg-grey-400 rounded-full" />
              <div className="flex flex-col items-start gap-px">
                <p className="font-semibold text-[#70757d] text-sm">
                  Greg Walter
                </p>
                <p className="text-xs font-semibold text-[#a4a7aa]">Admin</p>
              </div>

              <FaCaretDown className="ms-6" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="divide-y pb-2">
            {profileMenuItems.map(({ id, label, Icon }) => (
              <DropdownMenuItem
                key={id}
                className="flex items-center gap-3.5 p-2 text-[#404040] rounded-none text-sm font-medium"
              >
                <Icon className="size-4.5 text-[#141B34]" />
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
