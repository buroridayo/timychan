//Header
export function SheetHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border-b border-zinc-700">{children}</div>;
}

//Title
export function SheetTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}
