import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "light" | "dark";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: Variant;
  children: ReactNode;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-white text-black hover:bg-[#e8e8ed] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
  ghost:
    "bg-transparent text-white border border-white/15 hover:border-white/35 hover:bg-white/5",
  light:
    "bg-ink text-white hover:bg-black",
  dark:
    "bg-white text-black hover:bg-[#e8e8ed]",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
