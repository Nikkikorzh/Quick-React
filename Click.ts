import { createFileRoute } from "@tanstack/react-router";
import Click from "../pages/Click.tsx";

export const Route = createFileRoute("/Click")({
	component: Click,
});
