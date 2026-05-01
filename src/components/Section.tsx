import React, { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClass?: string;
  className?: string; // Explicitly define className
}

export function Section({ children, className, containerClass, ...props }: SectionProps) {
  return (
    <section className={cn("py-24 lg:py-32", className)} {...props}>
      <div className={cn("max-w-7xl mx-auto px-6 lg:px-8", containerClass)}>
        {children}
      </div>
    </section>
  );
}
