/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { transactionsGet } from "../../funcs/transactionsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.TransactionsGetRequest$inboundSchema,
};

export const tool$transactionsGet: ToolDefinition<typeof args> = {
  name: "transactions_get",
  description: ``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await transactionsGet(
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
