import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(
    "page_algorithm_browser",
    "routes/page_algorithm_browser.tsx"
  ),
  route("page_summary", "routes/page_summary.tsx"),
] satisfies RouteConfig;
