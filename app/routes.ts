import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("page_1", "routes/page_1.tsx"),
    route("page_dashboard", "routes/page_dashboard.tsx"),
    route("page_mindmap", "routes/page_mindmap.tsx"),
    route("page_summary", "routes/page_summary.tsx"),
] satisfies RouteConfig;