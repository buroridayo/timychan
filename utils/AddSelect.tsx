import React from "react";

interface AddSelectProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const AddSelect = React.forwardRef<HTMLDivElement, AddSelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`overflow-y-auto hidden-scrollbar rounded-xl border ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AddSelect.displayName = "AddSelect";
export default AddSelect;
