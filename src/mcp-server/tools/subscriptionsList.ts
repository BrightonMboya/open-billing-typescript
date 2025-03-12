/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionsList } from "../../funcs/subscriptionsList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SubscriptionListRequest$inboundSchema,
};

export const tool$subscriptionsList: ToolDefinition<typeof args> = {
  name: "subscriptions-list",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscriptionsList(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
