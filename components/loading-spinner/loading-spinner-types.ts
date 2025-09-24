export interface LoadingSpinnerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?:
    | "blue"
    | "green"
    | "orange"
    | "red"
    | "purple"
    | "pink"
    | "indigo"
    | "teal";
  customSize?: number;
  customStroke?: number;
  customColor?: string;
  label?: string;
  visible?: boolean;
  animationState?: "appear" | "animate" | "disappear" | "idle";
}

export interface PageLoadingSpinnerProps {
  text?: string;
}

export interface InlineLoadingSpinnerProps {
  text?: string;
  size?: LoadingSpinnerProps["size"];
}

export interface FullscreenLoadingSpinnerProps {
  text?: string;
}

export type LoadingSpinnerSize = NonNullable<LoadingSpinnerProps["size"]>;
export type LoadingSpinnerColor = NonNullable<LoadingSpinnerProps["color"]>;
export type LoadingSpinnerState = NonNullable<
  LoadingSpinnerProps["animationState"]
>;
