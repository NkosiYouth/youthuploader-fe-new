import { AuthLayout, DashboardLayout, PublicLayout } from "../layouts";
import { Dashboard, LoginPage, MagicLinkSentPage, MagicLinkVerifyPage } from "../pages";
import { RouteConfig } from "../types";
import { ROUTES } from "./routes";

export const routesData: RouteConfig[] = [
    {
        path: ROUTES.HOME,
        component: Dashboard,
        layout: PublicLayout,
        isPrivate: true,
    },
    {
        path: ROUTES.MAGIC_LINK_SENT,
        component: MagicLinkSentPage,
        layout: AuthLayout,
        isPrivate: false,
    },
    {
        path: ROUTES.LOGIN,
        component: LoginPage,
        layout: AuthLayout,
        isPrivate: false,
    },
    {
        path: ROUTES.VERIFY,
        component: MagicLinkVerifyPage,
        layout: AuthLayout,
        isPrivate: false,
    },
    {
        path: ROUTES.DASHBOARD,
        component: Dashboard,
        layout: DashboardLayout,
        isPrivate: false,
    },
];