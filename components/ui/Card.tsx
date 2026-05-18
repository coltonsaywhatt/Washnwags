import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
};

export function Card({
  className = "",
  elevated = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-[20px] border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-sm",
        elevated ? "shadow-card" : "",
        className
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
