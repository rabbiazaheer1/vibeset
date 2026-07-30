import React from "react";
import { Link } from "react-router-dom";

/**
 * Button
 * variant: "primary" (sand/cream fill) | "outline" (bordered, transparent)
 * as: "button" | "link" (react-router Link) | "a" (external anchor)
 */
export default function Button({
  children,
  variant = "primary",
  as = "button",
  to,
  href,
  icon: Icon,
  iconPosition = "left",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-pill font-bold text-[15px] px-6 py-4 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay";

  const variants = {
    primary:
      "bg-sand-200 text-ink-950 hover:bg-sand-100 active:bg-sand-300 shadow-sm",
    outline:
      "bg-transparent text-white border border-white/25 hover:border-white/50 hover:bg-white/5 active:bg-white/10",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} aria-hidden="true" />}
    </>
  );

  if (as === "link" && to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
