import { createFileRoute } from "@tanstack/react-router";
import List from "../pages/List.tsx";

export const Route = createFileRoute("/List")({
	component: List,
});
