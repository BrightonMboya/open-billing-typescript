/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsUpdate } from "../../funcs/transactionsUpdate.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.TransactionsUpdateRequest$inboundSchema,
};

export const tool$transactionsUpdate: ToolDefinition<typeof args> = {
  name: "transactions-update",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await transactionsUpdate(
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
