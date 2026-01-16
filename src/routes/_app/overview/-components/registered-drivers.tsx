import { StatusIcon } from '@/assets/icons';
import registeredDrivers from '@/components/data/registered-drivers';
import { cn } from '@/lib/utils';

const RegisteredDrivers = () => {
  return (
    <div className="rounded-lg py-3.5 bg-white grow">
      <ul>
        {registeredDrivers.slice(0, 9).map((driver) => (
          <li
            key={driver.id}
            className="flex items-center ps-5.5 pe-6.5 py-3.5 gap-2.5 hover:bg-accent transition-colors  font-medium"
          >
            <div className="size-12.5 bg-neutral-500 rounded-full shrink-0">
              <img
                src={driver.image}
                alt={driver.name}
                className="size-full rounded-full object-cover"
              />
            </div>

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
