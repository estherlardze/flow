import * as React from "react";
import { cn } from "@/lib/utils";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  indeterminate?: boolean;
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, indeterminate, ...props }, ref) => {
    const internalRef = React.useRef<HTMLInputElement | null>(null);

    const [internalChecked, setInternalChecked] = React.useState<boolean>(
      typeof props.checked === "boolean" ? props.checked : false
    );

    React.useEffect(() => {
      if (typeof props.checked === "boolean") setInternalChecked(props.checked);
    }, [props.checked]);

    React.useEffect(() => {
      const resolved = (ref as any)?.current ?? internalRef.current;
      if (resolved) resolved.indeterminate = !!indeterminate;
    }, [ref, indeterminate]);

    const setRefs = (el: HTMLInputElement | null) => {
      internalRef.current = el;
      if (!ref) return;
      if (typeof ref === "function") ref(el);
      else (ref as any).current = el;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalChecked(e.target.checked);
      props.onChange?.(e);
    };

    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer",
          className
        )}
      >
        <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md border bg-white transition-colors">
          <input
            ref={setRefs}
            type="checkbox"
            className="peer absolute inset-0 h-full w-full m-0 opacity-0 cursor-pointer"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            onChange={handleChange}
            {...props}
          />

          <span
            aria-hidden
            className={cn(
              "inline-flex items-center justify-center h-full w-full rounded-md",
              "border border-transparent peer-checked:bg-blue-600 peer-checked:border-blue-600",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500",
              "text-white"
            )}
          >
            <svg
              aria-hidden
              className={cn(
                "h-3.5 w-3.5 pointer-events-none transform transition-all duration-150",
                internalChecked ? "scale-100 opacity-100" : "scale-75 opacity-0"
              )}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="white"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>

        {props.title ? (
          <span className="text-sm text-gray-700 select-none">
            {props.title}
          </span>
        ) : null}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export default Checkbox;
