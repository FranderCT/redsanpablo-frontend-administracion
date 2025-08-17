import { createRoute } from "@tanstack/react-router";
import DashboardLayout from "../Layouts/DashboardLayout";
import { rootRoute } from "../../../Routes";

export const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'dashboard',
    component: DashboardLayout
})