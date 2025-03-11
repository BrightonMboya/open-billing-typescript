/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { discountsList } from "../../funcs/discountsList.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$discountsList: ToolDefinition = {
  name: "discounts_list",
  description: ``,
  tool: async (client, ctx) => {
    const [result, apiCall] = await discountsList(
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
