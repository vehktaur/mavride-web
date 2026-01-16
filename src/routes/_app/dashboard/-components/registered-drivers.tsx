import { StatusIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

type Driver = {
  id: string;
  name: string;
  avatar: string;
  status: 'Active' | 'Offline';
  hours?: number;
  rating?: number;
};

const mockDriversData: Driver[] = [
  {
    id: '1',
    name: 'Daniel Wan',
    avatar: 'https://i.pravatar.cc/150?img=12',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Daniel Wan',
    avatar: 'https://i.pravatar.cc/150?img=13',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Greg Walters',
    avatar: 'https://i.pravatar.cc/150?img=45',
    status: 'Offline',
  },
  {
    id: '4',
    name: 'Frank Murray',
    avatar: 'https://i.pravatar.cc/150?img=14',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Franca Doe',
    avatar: 'https://i.pravatar.cc/150?img=44',
    status: 'Offline',
  },
  {
    id: '6',
    name: 'Tim Eddy',
    avatar: 'https://i.pravatar.cc/150?img=15',
    status: 'Active',
  },
  {
    id: '7',
    name: 'Tina Brown',
    avatar: 'https://i.pravatar.cc/150?img=47',
    status: 'Offline',
  },
  {
    id: '8',
    name: 'Frank Murray',
    avatar: 'https://i.pravatar.cc/150?img=16',
    status: 'Offline',
  },
  {
    id: '9',
    name: 'Frank Murray',
    avatar: 'https://i.pravatar.cc/150?img=17',
    status: 'Active',
  },
];

const RegisteredDrivers = () => {
  return (
    <div className="rounded-lg py-3.5 bg-white grow">
      <ul>
        {mockDriversData.map((driver) => (
          <li
            key={driver.id}
            className="flex items-center ps-5.5 pe-6.5 py-3.5 gap-2.5 hover:bg-accent transition-colors  font-medium"
          >
            <img
              src={driver.avatar}
              alt={driver.name}
              className="size-12.5 rounded-full shrink-0 object-cover bg-neutral-500"
            />

            <p className="text-mavride-black clamp-[text,sm,lg] truncate">
              {driver.name}
            </p>

            <p
              className={cn(
                'ms-auto text-sm flex items-center gap-1.5',
                driver.status === 'Active'
                  ? 'text-mavride-green'
                  : 'text-error',
              )}
            >
              <StatusIcon className="size-3.75" />
              {driver.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegisteredDrivers;
