import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useRef,
  ReactNode,
  ReactElement,
} from "react";
import SheetContent from "./SheetContext"; // ← コンポーネント名を分離

export const SheetContext = createContext<{
  open: boolean;
  setOpen: (v: boolean) => void;
} | null>(null);

export function Sheet({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  const contextValue = useMemo(() => ({ open, setOpen }), [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        sheetRef.current &&
        !sheetRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <SheetContext.Provider value={contextValue}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && child.type === SheetContent
          ? React.cloneElement(child as ReactElement<any>, { ref: sheetRef })
          : child
      )}
    </SheetContext.Provider>
  );
}

export function useSheet() {
  const context = useContext(SheetContext);
  if (!context) throw new Error("useSheet must be used within <Sheet>");
  return context;
}
