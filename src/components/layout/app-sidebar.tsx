import { Logo } from '@/assets/svgs';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarListItem,
  SidebarMenu,
  useSidebar,
} from '@/components/ui/sidebar';
import { useSidebarMenu } from '@/data/sidebar-menu';
import { cn } from '@/lib/utils';

export const AppSidebar = () => {
  const navMenu = useSidebarMenu();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <HeaderComp />
      </SidebarHeader>
      <SidebarContent
        className="pb-28 max-w-62.5 w-full mx-auto"
        style={{
          scrollbarWidth: 'none',
        }}
      >
        {navMenu.map(
          (item) =>
            !Boolean(item.hidden) && (
              <SidebarGroup
                key={item.id}
                className={cn('mt-4', item.classNames?.root)}
              >
                {item.title && (
                  <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                )}

                <SidebarMenu>
                  {item.items?.map(
                    (item) =>
                      !Boolean(item.hidden) && (
                        <SidebarListItem key={item.id} item={item} />
                      ),
                  )}
                </SidebarMenu>
              </SidebarGroup>
            ),
        )}
      </SidebarContent>
    </Sidebar>
  );
};

const HeaderComp = () => {
  const { open } = useSidebar();
  return (
    <div className="flex items-center justify-between mt-2 max-w-62.5 w-full mx-auto">
      <Logo className={cn('text-black', open ? 'w-37.5' : 'w-0')} />

      {/* {!isMobile && (
        <div className="relative size-6 overflow-clip">
          <SidebarTrigger
            className={cn(
              'focus-visible:ring-0',
            //   !open &&
            //     'absolute inset-0 translate-x-48 transition-transform duration-200 group-hover:translate-x-0',
            )}
            Icon={
              <LuPanelLeftClose
                className={cn(
                  'size-6 text-neutral-700 transition-transform duration-300',
                  !open && 'rotate-180',
                )}
              />
            }
          />
        </div>
      )} */}
    </div>
  );
};
