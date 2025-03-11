/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionsActivate } from "../../funcs/subscriptionsActivate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.SubscriptionActivateSubscriptionRequest$inboundSchema,
};

export const tool$subscriptionsActivate: ToolDefinition<typeof args> = {
  name: "subscriptions_activate",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscriptionsActivate(
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
