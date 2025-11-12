import { useDrawer } from "./Drawer";

export function DrawerClose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setOpen } = useDrawer();
  return (
    <div onClick={() => setOpen(false)} className={className}>
      {children}
    </div>
  );
}
