/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { developerToolsCreate } from "../../funcs/developerToolsCreate.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$developerToolsCreate: ToolDefinition = {
  name: "developer-tools-create",
  description: ``,
  tool: async (client, ctx) => {
    const [result, apiCall] = await developerToolsCreate(
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
