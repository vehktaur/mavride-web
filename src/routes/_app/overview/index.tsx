import { createFileRoute, Link } from '@tanstack/react-router';
import RangeSelect from './-components/range-select';
import { StatCard, StatCards } from './-components/dashboard-stats';
import { CarIcon, UserIcon } from '@/assets/icons';
import RegisteredDrivers from './-components/registered-drivers';
import ScheduledTripTable from './-components/scheduled-trip-table';

export const Route = createFileRoute('/_app/overview/')({
  component: DashboardPage,
});

function DashboardPage() {
  const stats = [
    {
      title: 'Active Trips',
      count: 30,
      Icon: CarIcon,
      className: 'bg-[#B3B9F3]',
    },
    {
      title: 'Active Drivers',
      count: 32,
      Icon: UserIcon,
      className: 'bg-[#E7E9FB]',
    },
    {
      title: 'Registered Drivers',
      count: 67,
      Icon: UserIcon,
      className: 'bg-[#FEF6DB]',
    },
  ];

  return (
    <div className="grow flex flex-col w-full">
      <div className="flex items-stretch grow gap-5 *:w-full flex-col lg:flex-row">
        {/* Left Section */}
        <div className="flex flex-col grow gap-4">
          <section>
            <RangeSelect className="mb-4" />

            <StatCards>
              {stats.map((stat) => (
                <StatCard key={stat.title} {...stat} />
              ))}
            </StatCards>
          </section>

          <section className="white-section grow">
            <h2 className="title text-[#828194] mb-4">Scheduled Trip</h2>

            <ScheduledTripTable />
          </section>
        </div>

        {/* Right Section */}
        <aside className="max-w-92.25 flex flex-col w-full">
          <div className="flex items-center justify-between gap-4 font-semibold mb-4 text-sm">
            <h2 className="text-[#888889]">Registered Drivers</h2>

            <Link to="." className="text-mavride-blue/70">
              View All
            </Link>
          </div>

          <RegisteredDrivers />
        </aside>
      </div>
    </div>
  );
}
