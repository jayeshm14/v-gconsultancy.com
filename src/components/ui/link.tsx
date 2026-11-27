"use client";

import Link from "next/link";
import NextLink from "next/link";
import { cn } from "@/lib/utils";
import * as React from "react";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}

export function AppLink({
  href,
  children,
  external = false,
  className,
  ...props
}: LinkProps) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className)}
        {...props}
      >
        {children}
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    );
  }

  return (
    <NextLink href={href} className={cn(className)} {...props}>
      {children}
    </NextLink>
  );
}

export { Link };
export default AppLink;
