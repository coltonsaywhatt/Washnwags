import type { ReactNode } from "react";
import { SageBlob } from "@/components/ui/SageBlob";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  children
}: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <SageBlob className="absolute right-[-150px] top-10 h-[460px] w-[460px] text-sage organic-blob" />
      <div className="absolute left-[-120px] top-28 h-72 w-72 rounded-full bg-blush/18 blur-3xl" />
      <div className="section-shell relative z-10">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-none text-charcoal text-balance">
          {title}
        </h1>
        <div className="mt-7 grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
          <p className="max-w-3xl body-large text-muted">{description}</p>
          {children ? <div>{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
