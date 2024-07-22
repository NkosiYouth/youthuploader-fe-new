import React from "react";

export interface RouteConfig {
    path: string;
    component: React.FC;
    layout: React.FC;
    layoutProps?: Record<string, any>;
    isPrivate?: boolean;
    isPublic?: boolean;
}