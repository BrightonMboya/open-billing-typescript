/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { discountsCreate } from "../../funcs/discountsCreate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.DiscountCreateRequestBody$inboundSchema,
};

export const tool$discountsCreate: ToolDefinition<typeof args> = {
  name: "discounts-create",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await discountsCreate(
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
