/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersList } from "../../funcs/customersList.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$customersList: ToolDefinition = {
  name: "customers-list",
  description: ``,
  tool: async (client, ctx) => {
    const [result, apiCall] = await customersList(
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
