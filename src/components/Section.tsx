import React, { HTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "../lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClass?: string;
  className?: string; // Explicitly define className
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, containerClass, ...props }, ref) => {
  return (
    <section ref={ref} className={cn("py-24 lg:py-32", className)} {...props}>
      <div className={cn("max-w-7xl mx-auto px-6 lg:px-8", containerClass)}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";
