import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import DrawerContent from "./DrawerContent";

export const Drawercontext = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
} | null>(null);

export function Drawer({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(() => ({ open, setOpen }), [open]);

  // any button
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
      }
      {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <Drawercontext.Provider value={contextValue}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type === DrawerContent
          ? React.cloneElement(child as ReactElement<any>, { ref: drawerRef })
          : child
      )}
    </Drawercontext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(Drawercontext);
  if (!context) throw new Error("useDrawer must be used within <Drawer>");
  return context;
}
