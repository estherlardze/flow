import * as React from "react";
import "./loading-spinner.css";
import type { LoadingSpinnerProps } from "./loading-spinner-types";

export const LoadingSpinner = React.forwardRef<
  HTMLDivElement,
  LoadingSpinnerProps
>(
  (
    {
      size = "lg",
      color = "indigo",
      customSize,
      customStroke,
      customColor,
      label = "Loading…",
      visible = true,
      animationState,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const [currentState, setCurrentState] = React.useState<
      "appear" | "animate" | "disappear" | "idle"
    >("idle");

    React.useEffect(() => {
      if (animationState) {
        setCurrentState(animationState);
        return;
      }

      if (visible) {
        setCurrentState("appear");
        const timer = setTimeout(() => setCurrentState("animate"), 160);
        return () => clearTimeout(timer);
      } else {
        setCurrentState("disappear");
        const timer = setTimeout(() => setCurrentState("idle"), 160);
        return () => clearTimeout(timer);
      }
    }, [visible, animationState]);

    if (currentState === "idle" && !visible) {
      return null;
    }

    const classes = [
      "loading-spinner",
      `loading-spinner--${size}`,
      `loading-spinner--${color}`,
      currentState !== "idle" && `loading-spinner--${currentState}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const customStyles = {
      ...style,
      ...(customSize &&
        ({ "--size": `${customSize}px` } as React.CSSProperties)),
      ...(customStroke &&
        ({ "--stroke": `${customStroke}px` } as React.CSSProperties)),
      ...(customColor && ({ "--accent": customColor } as React.CSSProperties)),
    };

    return (
      <div
        ref={ref}
        className={classes}
        style={customStyles}
        role="status"
        aria-live="polite"
        aria-label={label}
        {...props}
      >
        <svg
          className="loading-spinner__svg"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <circle className="loading-spinner__track" cx="25" cy="25" r="20" />

          <circle className="loading-spinner__center" cx="25" cy="25" r="12" />

          <circle className="loading-spinner__arc" cx="25" cy="25" r="20" />
        </svg>

        <span className="loading-spinner__label">{label}</span>
      </div>
    );
  }
);

LoadingSpinner.displayName = "LoadingSpinner";
