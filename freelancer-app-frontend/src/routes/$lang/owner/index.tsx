import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/owner/")({
  component: () => <Navigate to="/owner/dashboard" />,
});
