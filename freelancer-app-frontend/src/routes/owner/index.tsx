import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/owner/")({
  component: () => <Navigate to="/owner/dashboard" />,
});
