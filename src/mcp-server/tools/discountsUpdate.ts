/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { discountsUpdate } from "../../funcs/discountsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DiscountUpdateRequest$inboundSchema,
};

export const tool$discountsUpdate: ToolDefinition<typeof args> = {
  name: "discounts_update",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await discountsUpdate(
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
