import { createFileRoute, useParams } from "@tanstack/react-router";
import SingleProjectPage from "../../../pages/SingleProjectPage";

export const Route = createFileRoute("/owner/projects/$id")({
  // const { postId } = useParams({ strict: false })
  component: ProjectRouteWrapper,
});

function ProjectRouteWrapper() {
  const { id } = Route.useParams();

  return <SingleProjectPage projectId={id} />;
}
