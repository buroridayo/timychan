import React, { forwardRef } from "react";
import { useDrawer } from "./Drawer";

export const DrawerContent = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const { open } = useDrawer();
  return (
    <div
      ref={ref}
      className={`fixed bottom-0 left-0 w-full bg-zinc-900 text-white shadow-lg transition-transform duration-300 z-50 ${
        open ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="p-6">{children}</div>
    </div>
  );
});
DrawerContent.displayName = "DrawerContent";
export default DrawerContent;
