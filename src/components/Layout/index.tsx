import React from "react";
import { AppShell } from "@mantine/core";
import { Navbar } from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <AppShell navbar={{ width: 250, breakpoint: "sm" }} padding="md">
      <AppShell.Navbar>
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
