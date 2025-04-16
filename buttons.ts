import { createFileRoute } from "@tanstack/react-router";
import Buttons from "../pages/Buttons.tsx";

export const Route = createFileRoute("/buttons")({
	component: Buttons,
});
