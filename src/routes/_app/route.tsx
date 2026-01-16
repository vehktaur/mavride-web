import { createFileRoute, Outlet } from '@tanstack/react-router';

import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

import Cookies from 'js-cookie';
import { AppHeader } from '@/components/layout/app-header';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  const defaultOpen = Cookies.get('sidebar_state') !== 'false';
  return (
    <div className="min-h-screen flex flex-col size-full">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <div className="flex flex-col min-h-screen w-full bg-[#FBFBFBFE] overflow-x-auto">
          <AppHeader />
          <main className="fl-px-4/5 py-5 grow flex flex-col w-full">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
