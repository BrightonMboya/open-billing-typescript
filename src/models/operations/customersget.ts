/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomersGetRequest = {
  customerId: string;
};

export const CustomersGetStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type CustomersGetStatus = ClosedEnum<typeof CustomersGetStatus>;

/**
 * Any valid JSON value
 */
export type CustomersGetCustomData = {};

/**
 * Get a Customer
 */
export type CustomersGetResponseBody = {
  id: string;
  email: string;
  name: string;
  status?: CustomersGetStatus | undefined;
  description?: string | null | undefined;
  /**
   * Any valid JSON value
   */
  customData: CustomersGetCustomData;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const CustomersGetRequest$inboundSchema: z.ZodType<
  CustomersGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  customer_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "customer_id": "customerId",
  });
});

/** @internal */
export type CustomersGetRequest$Outbound = {
  customer_id: string;
};

/** @internal */
export const CustomersGetRequest$outboundSchema: z.ZodType<
  CustomersGetRequest$Outbound,
  z.ZodTypeDef,
  CustomersGetRequest
> = z.object({
  customerId: z.string(),
}).transform((v) => {
  return remap$(v, {
    customerId: "customer_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomersGetRequest$ {
  /** @deprecated use `CustomersGetRequest$inboundSchema` instead. */
  export const inboundSchema = CustomersGetRequest$inboundSchema;
  /** @deprecated use `CustomersGetRequest$outboundSchema` instead. */
  export const outboundSchema = CustomersGetRequest$outboundSchema;
  /** @deprecated use `CustomersGetRequest$Outbound` instead. */
  export type Outbound = CustomersGetRequest$Outbound;
}

export function customersGetRequestToJSON(
  customersGetRequest: CustomersGetRequest,
): string {
  return JSON.stringify(
    CustomersGetRequest$outboundSchema.parse(customersGetRequest),
  );
}

export function customersGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomersGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomersGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomersGetRequest' from JSON`,
  );
}

/** @internal */
export const CustomersGetStatus$inboundSchema: z.ZodNativeEnum<
  typeof CustomersGetStatus
> = z.nativeEnum(CustomersGetStatus);

/** @internal */
export const CustomersGetStatus$outboundSchema: z.ZodNativeEnum<
  typeof CustomersGetStatus
> = CustomersGetStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomersGetStatus$ {
  /** @deprecated use `CustomersGetStatus$inboundSchema` instead. */
  export const inboundSchema = CustomersGetStatus$inboundSchema;
  /** @deprecated use `CustomersGetStatus$outboundSchema` instead. */
  export const outboundSchema = CustomersGetStatus$outboundSchema;
}

/** @internal */
export const CustomersGetCustomData$inboundSchema: z.ZodType<
  CustomersGetCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CustomersGetCustomData$Outbound = {};

/** @internal */
export const CustomersGetCustomData$outboundSchema: z.ZodType<
  CustomersGetCustomData$Outbound,
  z.ZodTypeDef,
  CustomersGetCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomersGetCustomData$ {
  /** @deprecated use `CustomersGetCustomData$inboundSchema` instead. */
  export const inboundSchema = CustomersGetCustomData$inboundSchema;
  /** @deprecated use `CustomersGetCustomData$outboundSchema` instead. */
  export const outboundSchema = CustomersGetCustomData$outboundSchema;
  /** @deprecated use `CustomersGetCustomData$Outbound` instead. */
  export type Outbound = CustomersGetCustomData$Outbound;
}

export function customersGetCustomDataToJSON(
  customersGetCustomData: CustomersGetCustomData,
): string {
  return JSON.stringify(
    CustomersGetCustomData$outboundSchema.parse(customersGetCustomData),
  );
}

export function customersGetCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<CustomersGetCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomersGetCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomersGetCustomData' from JSON`,
  );
}

/** @internal */
export const CustomersGetResponseBody$inboundSchema: z.ZodType<
  CustomersGetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  status: CustomersGetStatus$inboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  custom_data: z.lazy(() => CustomersGetCustomData$inboundSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
  });
});

/** @internal */
export type CustomersGetResponseBody$Outbound = {
  id: string;
  email: string;
  name: string;
  status?: string | undefined;
  description?: string | null | undefined;
  custom_data: CustomersGetCustomData$Outbound;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const CustomersGetResponseBody$outboundSchema: z.ZodType<
  CustomersGetResponseBody$Outbound,
  z.ZodTypeDef,
  CustomersGetResponseBody
> = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  status: CustomersGetStatus$outboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  customData: z.lazy(() => CustomersGetCustomData$outboundSchema),
  createdAt: z.string(),
  updatedAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomersGetResponseBody$ {
  /** @deprecated use `CustomersGetResponseBody$inboundSchema` instead. */
  export const inboundSchema = CustomersGetResponseBody$inboundSchema;
  /** @deprecated use `CustomersGetResponseBody$outboundSchema` instead. */
  export const outboundSchema = CustomersGetResponseBody$outboundSchema;
  /** @deprecated use `CustomersGetResponseBody$Outbound` instead. */
  export type Outbound = CustomersGetResponseBody$Outbound;
}

export function customersGetResponseBodyToJSON(
  customersGetResponseBody: CustomersGetResponseBody,
): string {
  return JSON.stringify(
    CustomersGetResponseBody$outboundSchema.parse(customersGetResponseBody),
  );
}

export function customersGetResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<CustomersGetResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomersGetResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomersGetResponseBody' from JSON`,
  );
}
