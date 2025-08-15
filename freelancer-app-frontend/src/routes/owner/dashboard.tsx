import { createFileRoute } from "@tanstack/react-router";
import OwnerDashboardPage from "../../pages/OwnerDashboardPage";

export const Route = createFileRoute("/owner/dashboard")({
  component: OwnerDashboardPage,
});
