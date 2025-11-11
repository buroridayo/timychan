import React, { forwardRef } from "react";
import { useSheet } from "./Sheet";

export const SheetContent = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const { open } = useSheet();
  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 h-screen w-80 bg-zinc-900 text-white shadow-lg transition-transform duration-300 z-50 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {children}
    </div>
  );
});
SheetContent.displayName = "SheetContent";
export default SheetContent;
