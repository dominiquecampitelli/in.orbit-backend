import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekSummary } from "../functions/get-week-summary";

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/pending-goals", async () => {
    const { summary } = await getWeekSummary();

    return { summary };
  });
};
