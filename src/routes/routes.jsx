import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import App from "../App"; // ✅ Ensure this import is correct

// Create Root Route
const rootRoute = createRootRoute({
  component: App,
});

// Create Index Route (so the homepage loads)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
});

// Attach child routes to root
const routeTree = rootRoute.addChildren([indexRoute]);

// Create and export the router
export const router = createRouter({ routeTree });
