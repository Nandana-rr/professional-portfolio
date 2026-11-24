import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { sections } from "@/content/profile";

describe("Portfolio sections", () => {
  it("every navigation section resolves to a real page", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    for (const s of sections) {
      expect(router.matchRoutes(s.to).at(-1)?.routeId, s.to).toBe(s.to);
    }
  });
});
