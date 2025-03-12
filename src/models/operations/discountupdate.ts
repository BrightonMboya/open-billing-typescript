/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const DiscountUpdateStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type DiscountUpdateStatus = ClosedEnum<typeof DiscountUpdateStatus>;

export const DiscountUpdateType = {
  Flat: "flat",
  Percentage: "percentage",
  FlatPerSeat: "flat_per_seat",
} as const;
export type DiscountUpdateType = ClosedEnum<typeof DiscountUpdateType>;

/**
 * Any valid JSON value
 */
export type DiscountUpdateCustomData = {};

export type DiscountUpdateRequestBody = {
  id?: string | undefined;
  status?: DiscountUpdateStatus | undefined;
  description?: string | null | undefined;
  enabledForCheckout?: boolean | null | undefined;
  amount?: number | undefined;
  currencyCode?: string | undefined;
  type?: DiscountUpdateType | undefined;
  recur?: boolean | null | undefined;
  maxRecurringIntervals?: string | null | undefined;
  usageLimit?: number | null | undefined;
  expiresAt?: string | null | undefined;
  /**
   * Any valid JSON value
   */
  customData?: DiscountUpdateCustomData | undefined;
  timesUsed?: number | null | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
  projectId?: string | null | undefined;
  restrictedTo?: Array<string> | undefined;
};

export type DiscountUpdateRequest = {
  discountId: string;
  requestBody: DiscountUpdateRequestBody;
};

export const DiscountUpdateDiscountsStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type DiscountUpdateDiscountsStatus = ClosedEnum<
  typeof DiscountUpdateDiscountsStatus
>;

export const DiscountUpdateDiscountsType = {
  Flat: "flat",
  Percentage: "percentage",
  FlatPerSeat: "flat_per_seat",
} as const;
export type DiscountUpdateDiscountsType = ClosedEnum<
  typeof DiscountUpdateDiscountsType
>;

/**
 * Updates a Discount by ID
 */
export type DiscountUpdateResponseBody = {
  id: string;
  status?: DiscountUpdateDiscountsStatus | undefined;
  description?: string | null | undefined;
  enabledForCheckout?: boolean | null | undefined;
  amount: string;
  currencyCode: string;
  type: DiscountUpdateDiscountsType;
  recur?: boolean | null | undefined;
  maxRecurringIntervals?: string | null | undefined;
  usageLimit?: number | null | undefined;
  expiresAt?: string | null | undefined;
  customData?: any | null | undefined;
  timesUsed?: number | null | undefined;
  createdAt: string;
  updatedAt: string;
  restrictedTo: Array<string>;
};

/** @internal */
export const DiscountUpdateStatus$inboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateStatus
> = z.nativeEnum(DiscountUpdateStatus);

/** @internal */
export const DiscountUpdateStatus$outboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateStatus
> = DiscountUpdateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateStatus$ {
  /** @deprecated use `DiscountUpdateStatus$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateStatus$inboundSchema;
  /** @deprecated use `DiscountUpdateStatus$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateStatus$outboundSchema;
}

/** @internal */
export const DiscountUpdateType$inboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateType
> = z.nativeEnum(DiscountUpdateType);

/** @internal */
export const DiscountUpdateType$outboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateType
> = DiscountUpdateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateType$ {
  /** @deprecated use `DiscountUpdateType$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateType$inboundSchema;
  /** @deprecated use `DiscountUpdateType$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateType$outboundSchema;
}

/** @internal */
export const DiscountUpdateCustomData$inboundSchema: z.ZodType<
  DiscountUpdateCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type DiscountUpdateCustomData$Outbound = {};

/** @internal */
export const DiscountUpdateCustomData$outboundSchema: z.ZodType<
  DiscountUpdateCustomData$Outbound,
  z.ZodTypeDef,
  DiscountUpdateCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateCustomData$ {
  /** @deprecated use `DiscountUpdateCustomData$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateCustomData$inboundSchema;
  /** @deprecated use `DiscountUpdateCustomData$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateCustomData$outboundSchema;
  /** @deprecated use `DiscountUpdateCustomData$Outbound` instead. */
  export type Outbound = DiscountUpdateCustomData$Outbound;
}

export function discountUpdateCustomDataToJSON(
  discountUpdateCustomData: DiscountUpdateCustomData,
): string {
  return JSON.stringify(
    DiscountUpdateCustomData$outboundSchema.parse(discountUpdateCustomData),
  );
}

export function discountUpdateCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<DiscountUpdateCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountUpdateCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountUpdateCustomData' from JSON`,
  );
}

/** @internal */
export const DiscountUpdateRequestBody$inboundSchema: z.ZodType<
  DiscountUpdateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  status: DiscountUpdateStatus$inboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  enabled_for_checkout: z.nullable(z.boolean()).optional(),
  amount: z.number().optional(),
  currency_code: z.string().optional(),
  type: DiscountUpdateType$inboundSchema.optional(),
  recur: z.nullable(z.boolean()).optional(),
  max_recurring_intervals: z.nullable(z.string()).optional(),
  usage_limit: z.nullable(z.number().int()).optional(),
  expires_at: z.nullable(z.string()).optional(),
  custom_data: z.lazy(() => DiscountUpdateCustomData$inboundSchema).optional(),
  times_used: z.nullable(z.number().int()).optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  projectId: z.nullable(z.string()).optional(),
  restricted_to: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "enabled_for_checkout": "enabledForCheckout",
    "currency_code": "currencyCode",
    "max_recurring_intervals": "maxRecurringIntervals",
    "usage_limit": "usageLimit",
    "expires_at": "expiresAt",
    "custom_data": "customData",
    "times_used": "timesUsed",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "restricted_to": "restrictedTo",
  });
});

/** @internal */
export type DiscountUpdateRequestBody$Outbound = {
  id?: string | undefined;
  status?: string | undefined;
  description?: string | null | undefined;
  enabled_for_checkout?: boolean | null | undefined;
  amount?: number | undefined;
  currency_code?: string | undefined;
  type?: string | undefined;
  recur?: boolean | null | undefined;
  max_recurring_intervals?: string | null | undefined;
  usage_limit?: number | null | undefined;
  expires_at?: string | null | undefined;
  custom_data?: DiscountUpdateCustomData$Outbound | undefined;
  times_used?: number | null | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  projectId?: string | null | undefined;
  restricted_to?: Array<string> | undefined;
};

/** @internal */
export const DiscountUpdateRequestBody$outboundSchema: z.ZodType<
  DiscountUpdateRequestBody$Outbound,
  z.ZodTypeDef,
  DiscountUpdateRequestBody
> = z.object({
  id: z.string().optional(),
  status: DiscountUpdateStatus$outboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  enabledForCheckout: z.nullable(z.boolean()).optional(),
  amount: z.number().optional(),
  currencyCode: z.string().optional(),
  type: DiscountUpdateType$outboundSchema.optional(),
  recur: z.nullable(z.boolean()).optional(),
  maxRecurringIntervals: z.nullable(z.string()).optional(),
  usageLimit: z.nullable(z.number().int()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  customData: z.lazy(() => DiscountUpdateCustomData$outboundSchema).optional(),
  timesUsed: z.nullable(z.number().int()).optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  projectId: z.nullable(z.string()).optional(),
  restrictedTo: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    enabledForCheckout: "enabled_for_checkout",
    currencyCode: "currency_code",
    maxRecurringIntervals: "max_recurring_intervals",
    usageLimit: "usage_limit",
    expiresAt: "expires_at",
    customData: "custom_data",
    timesUsed: "times_used",
    createdAt: "created_at",
    updatedAt: "updated_at",
    restrictedTo: "restricted_to",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateRequestBody$ {
  /** @deprecated use `DiscountUpdateRequestBody$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateRequestBody$inboundSchema;
  /** @deprecated use `DiscountUpdateRequestBody$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateRequestBody$outboundSchema;
  /** @deprecated use `DiscountUpdateRequestBody$Outbound` instead. */
  export type Outbound = DiscountUpdateRequestBody$Outbound;
}

export function discountUpdateRequestBodyToJSON(
  discountUpdateRequestBody: DiscountUpdateRequestBody,
): string {
  return JSON.stringify(
    DiscountUpdateRequestBody$outboundSchema.parse(discountUpdateRequestBody),
  );
}

export function discountUpdateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<DiscountUpdateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountUpdateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountUpdateRequestBody' from JSON`,
  );
}

/** @internal */
export const DiscountUpdateRequest$inboundSchema: z.ZodType<
  DiscountUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  discount_id: z.string(),
  RequestBody: z.lazy(() => DiscountUpdateRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "discount_id": "discountId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type DiscountUpdateRequest$Outbound = {
  discount_id: string;
  RequestBody: DiscountUpdateRequestBody$Outbound;
};

/** @internal */
export const DiscountUpdateRequest$outboundSchema: z.ZodType<
  DiscountUpdateRequest$Outbound,
  z.ZodTypeDef,
  DiscountUpdateRequest
> = z.object({
  discountId: z.string(),
  requestBody: z.lazy(() => DiscountUpdateRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    discountId: "discount_id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateRequest$ {
  /** @deprecated use `DiscountUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateRequest$inboundSchema;
  /** @deprecated use `DiscountUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateRequest$outboundSchema;
  /** @deprecated use `DiscountUpdateRequest$Outbound` instead. */
  export type Outbound = DiscountUpdateRequest$Outbound;
}

export function discountUpdateRequestToJSON(
  discountUpdateRequest: DiscountUpdateRequest,
): string {
  return JSON.stringify(
    DiscountUpdateRequest$outboundSchema.parse(discountUpdateRequest),
  );
}

export function discountUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<DiscountUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountUpdateRequest' from JSON`,
  );
}

/** @internal */
export const DiscountUpdateDiscountsStatus$inboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateDiscountsStatus
> = z.nativeEnum(DiscountUpdateDiscountsStatus);

/** @internal */
export const DiscountUpdateDiscountsStatus$outboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateDiscountsStatus
> = DiscountUpdateDiscountsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateDiscountsStatus$ {
  /** @deprecated use `DiscountUpdateDiscountsStatus$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateDiscountsStatus$inboundSchema;
  /** @deprecated use `DiscountUpdateDiscountsStatus$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateDiscountsStatus$outboundSchema;
}

/** @internal */
export const DiscountUpdateDiscountsType$inboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateDiscountsType
> = z.nativeEnum(DiscountUpdateDiscountsType);

/** @internal */
export const DiscountUpdateDiscountsType$outboundSchema: z.ZodNativeEnum<
  typeof DiscountUpdateDiscountsType
> = DiscountUpdateDiscountsType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateDiscountsType$ {
  /** @deprecated use `DiscountUpdateDiscountsType$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateDiscountsType$inboundSchema;
  /** @deprecated use `DiscountUpdateDiscountsType$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateDiscountsType$outboundSchema;
}

/** @internal */
export const DiscountUpdateResponseBody$inboundSchema: z.ZodType<
  DiscountUpdateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  status: DiscountUpdateDiscountsStatus$inboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  enabled_for_checkout: z.nullable(z.boolean()).optional(),
  amount: z.string(),
  currency_code: z.string(),
  type: DiscountUpdateDiscountsType$inboundSchema,
  recur: z.nullable(z.boolean()).optional(),
  max_recurring_intervals: z.nullable(z.string()).optional(),
  usage_limit: z.nullable(z.number().int()).optional(),
  expires_at: z.nullable(z.string()).optional(),
  custom_data: z.nullable(z.any()).optional(),
  times_used: z.nullable(z.number().int()).optional(),
  created_at: z.string(),
  updated_at: z.string(),
  restricted_to: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "enabled_for_checkout": "enabledForCheckout",
    "currency_code": "currencyCode",
    "max_recurring_intervals": "maxRecurringIntervals",
    "usage_limit": "usageLimit",
    "expires_at": "expiresAt",
    "custom_data": "customData",
    "times_used": "timesUsed",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "restricted_to": "restrictedTo",
  });
});

/** @internal */
export type DiscountUpdateResponseBody$Outbound = {
  id: string;
  status?: string | undefined;
  description?: string | null | undefined;
  enabled_for_checkout?: boolean | null | undefined;
  amount: string;
  currency_code: string;
  type: string;
  recur?: boolean | null | undefined;
  max_recurring_intervals?: string | null | undefined;
  usage_limit?: number | null | undefined;
  expires_at?: string | null | undefined;
  custom_data?: any | null | undefined;
  times_used?: number | null | undefined;
  created_at: string;
  updated_at: string;
  restricted_to: Array<string>;
};

/** @internal */
export const DiscountUpdateResponseBody$outboundSchema: z.ZodType<
  DiscountUpdateResponseBody$Outbound,
  z.ZodTypeDef,
  DiscountUpdateResponseBody
> = z.object({
  id: z.string(),
  status: DiscountUpdateDiscountsStatus$outboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  enabledForCheckout: z.nullable(z.boolean()).optional(),
  amount: z.string(),
  currencyCode: z.string(),
  type: DiscountUpdateDiscountsType$outboundSchema,
  recur: z.nullable(z.boolean()).optional(),
  maxRecurringIntervals: z.nullable(z.string()).optional(),
  usageLimit: z.nullable(z.number().int()).optional(),
  expiresAt: z.nullable(z.string()).optional(),
  customData: z.nullable(z.any()).optional(),
  timesUsed: z.nullable(z.number().int()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  restrictedTo: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    enabledForCheckout: "enabled_for_checkout",
    currencyCode: "currency_code",
    maxRecurringIntervals: "max_recurring_intervals",
    usageLimit: "usage_limit",
    expiresAt: "expires_at",
    customData: "custom_data",
    timesUsed: "times_used",
    createdAt: "created_at",
    updatedAt: "updated_at",
    restrictedTo: "restricted_to",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountUpdateResponseBody$ {
  /** @deprecated use `DiscountUpdateResponseBody$inboundSchema` instead. */
  export const inboundSchema = DiscountUpdateResponseBody$inboundSchema;
  /** @deprecated use `DiscountUpdateResponseBody$outboundSchema` instead. */
  export const outboundSchema = DiscountUpdateResponseBody$outboundSchema;
  /** @deprecated use `DiscountUpdateResponseBody$Outbound` instead. */
  export type Outbound = DiscountUpdateResponseBody$Outbound;
}

export function discountUpdateResponseBodyToJSON(
  discountUpdateResponseBody: DiscountUpdateResponseBody,
): string {
  return JSON.stringify(
    DiscountUpdateResponseBody$outboundSchema.parse(discountUpdateResponseBody),
  );
}

export function discountUpdateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<DiscountUpdateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountUpdateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountUpdateResponseBody' from JSON`,
  );
}
