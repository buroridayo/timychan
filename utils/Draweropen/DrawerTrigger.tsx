import { useDrawer } from "./Drawer";

export function DrawerTrigger({ children }: { children: React.ReactNode }) {
  const { setOpen } = useDrawer();
  return <div onClick={() => setOpen(true)}>{children}</div>;
}
