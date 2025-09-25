import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonTag = "button" | "a" | "div" | typeof Link;
type Variant = "link" | "icon" | "default" | "danger";

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
  const classes = clsx(
    "inline-flex items-center px-2 py-2 rounded-md select-none no-underline",
    "bg-transparent cursor-pointer transition-shadow duration-200 hover:opacity-50",
    "text-[#6A6996]",
    {
      "border-0 shadow-none": variant === "icon" || as === Link,
    },
    variant === "danger" && "text-[#FF5F5F]",
    disabled && "opacity-80 pointer-events-none",
    className
  );

  let Component: ElementType = "button";
  if (as === "a") Component = "a";
  if (as === "div") Component = "div";
  if (as === Link) Component = Link;

  return (
    <Component
      href={as === "a" ? href : undefined}
      to={as === Link ? to : undefined}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      className={classes}
      {...rest}
    >
      {children}
    </Component>
  );
};
export default Button;
