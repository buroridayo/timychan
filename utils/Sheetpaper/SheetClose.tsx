import { useSheet } from "./Sheet";
import React from "react";

export function SheetClose({ children }: { children: React.ReactNode }) {
  const { setOpen } = useSheet();
  return <div onClick={() => setOpen(false)}>{children}</div>;
}
