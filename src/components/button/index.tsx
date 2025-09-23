import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonTag = "button" | "a" | "div" | typeof Link;
type Variant = "link" | "icon" | "default";

type Props<T extends ElementType = "button"> = {
  as?: ButtonTag;
  href?: string;
  to?: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  variant?: Variant;
} & ComponentPropsWithoutRef<T>;

const Button = ({
  as = "button",
  href,
  to,
  disabled = false,
  children,
  className,
  variant = "default",
  ...rest
}: Props) => {
  const classes =
    "inline-flex items-center px-2 py-2 rounded-md select-none no-underline " +
    "bg-transparent text-inherit cursor-pointer " +
    "transition-shadow duration-200 hover:bg-gray-200 " +
    (variant === "icon" ? "border-0 shadow-none" : "border border-gray-200 shadow-md") +
    (disabled ? "opacity-80 pointer-events-none" : "") +
    (as === Link ? "border-0 shadow-none" : "") +
    (className ?? "");

  let Component: ElementType = "button";
  if (as === "a") Component = "a";
  if (as === "div") Component = "div";
  if (as === Link) Component = Link;

  return (
    <Component
      {...rest}
      href={as === "a" && href}
      to={as === Link && to}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={classes}
    >
      {children}
    </Component>
  );
};
export default Button;
