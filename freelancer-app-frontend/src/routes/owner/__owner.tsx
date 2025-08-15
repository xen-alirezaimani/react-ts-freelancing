import { createFileRoute, Outlet } from "@tanstack/react-router";
import OwnerLayout from "../../layouts/OwnerLayout";

export const Route = createFileRoute("/owner/__owner")({
  component: () => (
    <OwnerLayout>
      <Outlet />
    </OwnerLayout>
  ),
});
