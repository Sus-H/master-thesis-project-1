import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/starting_page.tsx"),
  route(
    "page_algorithm_browser",
    "routes/page_algorithm_browser.tsx"
  ),
  route("page_summary", "routes/page_summary.tsx"),
  route("home", "routes/home.tsx"),
] satisfies RouteConfig;
