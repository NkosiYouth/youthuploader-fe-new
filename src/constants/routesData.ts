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
        isPublic: true
    },
    {
        path: ROUTES.LOGIN,
        component: LoginPage,
        layout: AuthLayout,
        isPublic: true
    },
    {
        path: ROUTES.VERIFY,
        component: MagicLinkVerifyPage,
        layout: AuthLayout,
        isPublic: true
    },
    {
        path: ROUTES.DASHBOARD,
        component: Dashboard,
        layout: DashboardLayout,
        layoutProps: {
            pageTitle:'Dashboard',
        },
        isPrivate: true,
    },
];