import { createRoute } from "@tanstack/react-router";
import { dashboardRoute } from "../../Dashboard/Routes/DashboardRoutes";
import UserProfile from "../Pages/UserProfile";


export const usersRoute = createRoute({
    getParentRoute: () => dashboardRoute,
    path: 'users'
})

export const userProfileroute = createRoute({
    getParentRoute: () => usersRoute,
    path: 'profile',
    component: UserProfile
})