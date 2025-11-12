//Header
export function DrawerHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-4 border-b">{children}</div>;
}

//Title
export function DrawerTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center justify-center text-center text-sm font-bold">
      {children}
    </h2>
  );
}
