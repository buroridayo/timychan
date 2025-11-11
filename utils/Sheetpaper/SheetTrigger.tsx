import React from "react";
import { useSheet } from "./Sheet";

export function SheetTrigger({ children }: { children: React.ReactNode }) {
  const { setOpen } = useSheet();
  return <div onClick={() => setOpen(true)}>{children}</div>;
}

export default SheetTrigger;
