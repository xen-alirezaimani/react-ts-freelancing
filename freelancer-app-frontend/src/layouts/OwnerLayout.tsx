import type { ReactNode } from "react";

interface OwnerLayoutProps {
  children: ReactNode;
}

export default function OwnerLayout({ children }: OwnerLayoutProps) {
  return <div>{children}</div>;
}
