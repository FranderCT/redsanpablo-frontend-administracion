import { createRoute } from "@tanstack/react-router";
import { dashboardRoute } from "../../Dashboard/Routes/DashboardRoutes";
import UserProfile from "../Components/UserProfile/UserPhotoProfile";

export const userProfileroute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: 'users/profile',
    component: UserProfile
})