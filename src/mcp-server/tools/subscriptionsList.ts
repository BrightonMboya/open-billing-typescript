/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionsList } from "../../funcs/subscriptionsList.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$subscriptionsList: ToolDefinition = {
  name: "subscriptions_list",
  description: ``,
  tool: async (client, ctx) => {
    const [result, apiCall] = await subscriptionsList(
      client,
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
