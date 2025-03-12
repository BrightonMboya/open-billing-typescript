/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const PricesCreateType = {
  Standard: "standard",
  Custom: "custom",
} as const;
export type PricesCreateType = ClosedEnum<typeof PricesCreateType>;

export const PricesCreateInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type PricesCreateInterval = ClosedEnum<typeof PricesCreateInterval>;

export type PricesCreateBillingCycle = {
  interval: PricesCreateInterval;
  frequency: number;
};

export const PricesCreatePricesInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type PricesCreatePricesInterval = ClosedEnum<
  typeof PricesCreatePricesInterval
>;

export type PricesCreateTrialPeriod = {
  interval: PricesCreatePricesInterval;
  frequency: number;
};

export type PricesCreateUnitPrice = {
  amount: number;
  currencyCode: string;
};

export const PricesCreateStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type PricesCreateStatus = ClosedEnum<typeof PricesCreateStatus>;

/**
 * Any valid JSON value
 */
export type PricesCreateCustomData = {};

export type PricesCreateRequestBody = {
  productId: string;
  description?: string | null | undefined;
  type: PricesCreateType;
  name: string;
  billingCycle: PricesCreateBillingCycle;
  trialPeriod: PricesCreateTrialPeriod;
  unitPrice: PricesCreateUnitPrice;
  status: PricesCreateStatus;
  /**
   * Any valid JSON value
   */
  customData?: PricesCreateCustomData | undefined;
};

export const PricesCreatePricesType = {
  Standard: "standard",
  Custom: "custom",
} as const;
export type PricesCreatePricesType = ClosedEnum<typeof PricesCreatePricesType>;

export const PricesCreatePricesResponseInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type PricesCreatePricesResponseInterval = ClosedEnum<
  typeof PricesCreatePricesResponseInterval
>;

export type PricesCreatePricesBillingCycle = {
  interval: PricesCreatePricesResponseInterval;
  frequency: number;
};

export const PricesCreatePricesResponse200Interval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type PricesCreatePricesResponse200Interval = ClosedEnum<
  typeof PricesCreatePricesResponse200Interval
>;

export type PricesCreatePricesTrialPeriod = {
  interval: PricesCreatePricesResponse200Interval;
  frequency: number;
};

export type PricesCreatePricesUnitPrice = {
  amount: number;
  currencyCode: string;
};

export const PricesCreatePricesStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type PricesCreatePricesStatus = ClosedEnum<
  typeof PricesCreatePricesStatus
>;

/**
 * Any valid JSON value
 */
export type PricesCreatePricesCustomData = {};

export type PricesCreateResponseBody = {
  productId: string;
  description?: string | null | undefined;
  type: PricesCreatePricesType;
  name: string;
  billingCycle: PricesCreatePricesBillingCycle;
  trialPeriod: PricesCreatePricesTrialPeriod;
  unitPrice: PricesCreatePricesUnitPrice;
  status: PricesCreatePricesStatus;
  /**
   * Any valid JSON value
   */
  customData?: PricesCreatePricesCustomData | undefined;
  id: string;
  createdAt: string;
  updatedAt: string;
};

/** @internal */
export const PricesCreateType$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreateType
> = z.nativeEnum(PricesCreateType);

/** @internal */
export const PricesCreateType$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreateType
> = PricesCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateType$ {
  /** @deprecated use `PricesCreateType$inboundSchema` instead. */
  export const inboundSchema = PricesCreateType$inboundSchema;
  /** @deprecated use `PricesCreateType$outboundSchema` instead. */
  export const outboundSchema = PricesCreateType$outboundSchema;
}

/** @internal */
export const PricesCreateInterval$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreateInterval
> = z.nativeEnum(PricesCreateInterval);

/** @internal */
export const PricesCreateInterval$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreateInterval
> = PricesCreateInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateInterval$ {
  /** @deprecated use `PricesCreateInterval$inboundSchema` instead. */
  export const inboundSchema = PricesCreateInterval$inboundSchema;
  /** @deprecated use `PricesCreateInterval$outboundSchema` instead. */
  export const outboundSchema = PricesCreateInterval$outboundSchema;
}

/** @internal */
export const PricesCreateBillingCycle$inboundSchema: z.ZodType<
  PricesCreateBillingCycle,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: PricesCreateInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type PricesCreateBillingCycle$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const PricesCreateBillingCycle$outboundSchema: z.ZodType<
  PricesCreateBillingCycle$Outbound,
  z.ZodTypeDef,
  PricesCreateBillingCycle
> = z.object({
  interval: PricesCreateInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateBillingCycle$ {
  /** @deprecated use `PricesCreateBillingCycle$inboundSchema` instead. */
  export const inboundSchema = PricesCreateBillingCycle$inboundSchema;
  /** @deprecated use `PricesCreateBillingCycle$outboundSchema` instead. */
  export const outboundSchema = PricesCreateBillingCycle$outboundSchema;
  /** @deprecated use `PricesCreateBillingCycle$Outbound` instead. */
  export type Outbound = PricesCreateBillingCycle$Outbound;
}

export function pricesCreateBillingCycleToJSON(
  pricesCreateBillingCycle: PricesCreateBillingCycle,
): string {
  return JSON.stringify(
    PricesCreateBillingCycle$outboundSchema.parse(pricesCreateBillingCycle),
  );
}

export function pricesCreateBillingCycleFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateBillingCycle, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateBillingCycle$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateBillingCycle' from JSON`,
  );
}

/** @internal */
export const PricesCreatePricesInterval$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesInterval
> = z.nativeEnum(PricesCreatePricesInterval);

/** @internal */
export const PricesCreatePricesInterval$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesInterval
> = PricesCreatePricesInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesInterval$ {
  /** @deprecated use `PricesCreatePricesInterval$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesInterval$inboundSchema;
  /** @deprecated use `PricesCreatePricesInterval$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesInterval$outboundSchema;
}

/** @internal */
export const PricesCreateTrialPeriod$inboundSchema: z.ZodType<
  PricesCreateTrialPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: PricesCreatePricesInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type PricesCreateTrialPeriod$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const PricesCreateTrialPeriod$outboundSchema: z.ZodType<
  PricesCreateTrialPeriod$Outbound,
  z.ZodTypeDef,
  PricesCreateTrialPeriod
> = z.object({
  interval: PricesCreatePricesInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateTrialPeriod$ {
  /** @deprecated use `PricesCreateTrialPeriod$inboundSchema` instead. */
  export const inboundSchema = PricesCreateTrialPeriod$inboundSchema;
  /** @deprecated use `PricesCreateTrialPeriod$outboundSchema` instead. */
  export const outboundSchema = PricesCreateTrialPeriod$outboundSchema;
  /** @deprecated use `PricesCreateTrialPeriod$Outbound` instead. */
  export type Outbound = PricesCreateTrialPeriod$Outbound;
}

export function pricesCreateTrialPeriodToJSON(
  pricesCreateTrialPeriod: PricesCreateTrialPeriod,
): string {
  return JSON.stringify(
    PricesCreateTrialPeriod$outboundSchema.parse(pricesCreateTrialPeriod),
  );
}

export function pricesCreateTrialPeriodFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateTrialPeriod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateTrialPeriod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateTrialPeriod' from JSON`,
  );
}

/** @internal */
export const PricesCreateUnitPrice$inboundSchema: z.ZodType<
  PricesCreateUnitPrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  currency_code: z.string(),
}).transform((v) => {
  return remap$(v, {
    "currency_code": "currencyCode",
  });
});

/** @internal */
export type PricesCreateUnitPrice$Outbound = {
  amount: number;
  currency_code: string;
};

/** @internal */
export const PricesCreateUnitPrice$outboundSchema: z.ZodType<
  PricesCreateUnitPrice$Outbound,
  z.ZodTypeDef,
  PricesCreateUnitPrice
> = z.object({
  amount: z.number(),
  currencyCode: z.string(),
}).transform((v) => {
  return remap$(v, {
    currencyCode: "currency_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateUnitPrice$ {
  /** @deprecated use `PricesCreateUnitPrice$inboundSchema` instead. */
  export const inboundSchema = PricesCreateUnitPrice$inboundSchema;
  /** @deprecated use `PricesCreateUnitPrice$outboundSchema` instead. */
  export const outboundSchema = PricesCreateUnitPrice$outboundSchema;
  /** @deprecated use `PricesCreateUnitPrice$Outbound` instead. */
  export type Outbound = PricesCreateUnitPrice$Outbound;
}

export function pricesCreateUnitPriceToJSON(
  pricesCreateUnitPrice: PricesCreateUnitPrice,
): string {
  return JSON.stringify(
    PricesCreateUnitPrice$outboundSchema.parse(pricesCreateUnitPrice),
  );
}

export function pricesCreateUnitPriceFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateUnitPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateUnitPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateUnitPrice' from JSON`,
  );
}

/** @internal */
export const PricesCreateStatus$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreateStatus
> = z.nativeEnum(PricesCreateStatus);

/** @internal */
export const PricesCreateStatus$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreateStatus
> = PricesCreateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateStatus$ {
  /** @deprecated use `PricesCreateStatus$inboundSchema` instead. */
  export const inboundSchema = PricesCreateStatus$inboundSchema;
  /** @deprecated use `PricesCreateStatus$outboundSchema` instead. */
  export const outboundSchema = PricesCreateStatus$outboundSchema;
}

/** @internal */
export const PricesCreateCustomData$inboundSchema: z.ZodType<
  PricesCreateCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PricesCreateCustomData$Outbound = {};

/** @internal */
export const PricesCreateCustomData$outboundSchema: z.ZodType<
  PricesCreateCustomData$Outbound,
  z.ZodTypeDef,
  PricesCreateCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateCustomData$ {
  /** @deprecated use `PricesCreateCustomData$inboundSchema` instead. */
  export const inboundSchema = PricesCreateCustomData$inboundSchema;
  /** @deprecated use `PricesCreateCustomData$outboundSchema` instead. */
  export const outboundSchema = PricesCreateCustomData$outboundSchema;
  /** @deprecated use `PricesCreateCustomData$Outbound` instead. */
  export type Outbound = PricesCreateCustomData$Outbound;
}

export function pricesCreateCustomDataToJSON(
  pricesCreateCustomData: PricesCreateCustomData,
): string {
  return JSON.stringify(
    PricesCreateCustomData$outboundSchema.parse(pricesCreateCustomData),
  );
}

export function pricesCreateCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateCustomData' from JSON`,
  );
}

/** @internal */
export const PricesCreateRequestBody$inboundSchema: z.ZodType<
  PricesCreateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_id: z.string(),
  description: z.nullable(z.string()).optional(),
  type: PricesCreateType$inboundSchema,
  name: z.string(),
  billing_cycle: z.lazy(() => PricesCreateBillingCycle$inboundSchema),
  trial_period: z.lazy(() => PricesCreateTrialPeriod$inboundSchema),
  unit_price: z.lazy(() => PricesCreateUnitPrice$inboundSchema),
  status: PricesCreateStatus$inboundSchema,
  custom_data: z.lazy(() => PricesCreateCustomData$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
    "billing_cycle": "billingCycle",
    "trial_period": "trialPeriod",
    "unit_price": "unitPrice",
    "custom_data": "customData",
  });
});

/** @internal */
export type PricesCreateRequestBody$Outbound = {
  product_id: string;
  description?: string | null | undefined;
  type: string;
  name: string;
  billing_cycle: PricesCreateBillingCycle$Outbound;
  trial_period: PricesCreateTrialPeriod$Outbound;
  unit_price: PricesCreateUnitPrice$Outbound;
  status: string;
  custom_data?: PricesCreateCustomData$Outbound | undefined;
};

/** @internal */
export const PricesCreateRequestBody$outboundSchema: z.ZodType<
  PricesCreateRequestBody$Outbound,
  z.ZodTypeDef,
  PricesCreateRequestBody
> = z.object({
  productId: z.string(),
  description: z.nullable(z.string()).optional(),
  type: PricesCreateType$outboundSchema,
  name: z.string(),
  billingCycle: z.lazy(() => PricesCreateBillingCycle$outboundSchema),
  trialPeriod: z.lazy(() => PricesCreateTrialPeriod$outboundSchema),
  unitPrice: z.lazy(() => PricesCreateUnitPrice$outboundSchema),
  status: PricesCreateStatus$outboundSchema,
  customData: z.lazy(() => PricesCreateCustomData$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    unitPrice: "unit_price",
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateRequestBody$ {
  /** @deprecated use `PricesCreateRequestBody$inboundSchema` instead. */
  export const inboundSchema = PricesCreateRequestBody$inboundSchema;
  /** @deprecated use `PricesCreateRequestBody$outboundSchema` instead. */
  export const outboundSchema = PricesCreateRequestBody$outboundSchema;
  /** @deprecated use `PricesCreateRequestBody$Outbound` instead. */
  export type Outbound = PricesCreateRequestBody$Outbound;
}

export function pricesCreateRequestBodyToJSON(
  pricesCreateRequestBody: PricesCreateRequestBody,
): string {
  return JSON.stringify(
    PricesCreateRequestBody$outboundSchema.parse(pricesCreateRequestBody),
  );
}

export function pricesCreateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateRequestBody' from JSON`,
  );
}

/** @internal */
export const PricesCreatePricesType$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesType
> = z.nativeEnum(PricesCreatePricesType);

/** @internal */
export const PricesCreatePricesType$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesType
> = PricesCreatePricesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesType$ {
  /** @deprecated use `PricesCreatePricesType$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesType$inboundSchema;
  /** @deprecated use `PricesCreatePricesType$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesType$outboundSchema;
}

/** @internal */
export const PricesCreatePricesResponseInterval$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesResponseInterval
> = z.nativeEnum(PricesCreatePricesResponseInterval);

/** @internal */
export const PricesCreatePricesResponseInterval$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesResponseInterval
> = PricesCreatePricesResponseInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesResponseInterval$ {
  /** @deprecated use `PricesCreatePricesResponseInterval$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesResponseInterval$inboundSchema;
  /** @deprecated use `PricesCreatePricesResponseInterval$outboundSchema` instead. */
  export const outboundSchema =
    PricesCreatePricesResponseInterval$outboundSchema;
}

/** @internal */
export const PricesCreatePricesBillingCycle$inboundSchema: z.ZodType<
  PricesCreatePricesBillingCycle,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: PricesCreatePricesResponseInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type PricesCreatePricesBillingCycle$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const PricesCreatePricesBillingCycle$outboundSchema: z.ZodType<
  PricesCreatePricesBillingCycle$Outbound,
  z.ZodTypeDef,
  PricesCreatePricesBillingCycle
> = z.object({
  interval: PricesCreatePricesResponseInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesBillingCycle$ {
  /** @deprecated use `PricesCreatePricesBillingCycle$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesBillingCycle$inboundSchema;
  /** @deprecated use `PricesCreatePricesBillingCycle$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesBillingCycle$outboundSchema;
  /** @deprecated use `PricesCreatePricesBillingCycle$Outbound` instead. */
  export type Outbound = PricesCreatePricesBillingCycle$Outbound;
}

export function pricesCreatePricesBillingCycleToJSON(
  pricesCreatePricesBillingCycle: PricesCreatePricesBillingCycle,
): string {
  return JSON.stringify(
    PricesCreatePricesBillingCycle$outboundSchema.parse(
      pricesCreatePricesBillingCycle,
    ),
  );
}

export function pricesCreatePricesBillingCycleFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreatePricesBillingCycle, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreatePricesBillingCycle$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreatePricesBillingCycle' from JSON`,
  );
}

/** @internal */
export const PricesCreatePricesResponse200Interval$inboundSchema:
  z.ZodNativeEnum<typeof PricesCreatePricesResponse200Interval> = z.nativeEnum(
    PricesCreatePricesResponse200Interval,
  );

/** @internal */
export const PricesCreatePricesResponse200Interval$outboundSchema:
  z.ZodNativeEnum<typeof PricesCreatePricesResponse200Interval> =
    PricesCreatePricesResponse200Interval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesResponse200Interval$ {
  /** @deprecated use `PricesCreatePricesResponse200Interval$inboundSchema` instead. */
  export const inboundSchema =
    PricesCreatePricesResponse200Interval$inboundSchema;
  /** @deprecated use `PricesCreatePricesResponse200Interval$outboundSchema` instead. */
  export const outboundSchema =
    PricesCreatePricesResponse200Interval$outboundSchema;
}

/** @internal */
export const PricesCreatePricesTrialPeriod$inboundSchema: z.ZodType<
  PricesCreatePricesTrialPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: PricesCreatePricesResponse200Interval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type PricesCreatePricesTrialPeriod$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const PricesCreatePricesTrialPeriod$outboundSchema: z.ZodType<
  PricesCreatePricesTrialPeriod$Outbound,
  z.ZodTypeDef,
  PricesCreatePricesTrialPeriod
> = z.object({
  interval: PricesCreatePricesResponse200Interval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesTrialPeriod$ {
  /** @deprecated use `PricesCreatePricesTrialPeriod$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesTrialPeriod$inboundSchema;
  /** @deprecated use `PricesCreatePricesTrialPeriod$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesTrialPeriod$outboundSchema;
  /** @deprecated use `PricesCreatePricesTrialPeriod$Outbound` instead. */
  export type Outbound = PricesCreatePricesTrialPeriod$Outbound;
}

export function pricesCreatePricesTrialPeriodToJSON(
  pricesCreatePricesTrialPeriod: PricesCreatePricesTrialPeriod,
): string {
  return JSON.stringify(
    PricesCreatePricesTrialPeriod$outboundSchema.parse(
      pricesCreatePricesTrialPeriod,
    ),
  );
}

export function pricesCreatePricesTrialPeriodFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreatePricesTrialPeriod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreatePricesTrialPeriod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreatePricesTrialPeriod' from JSON`,
  );
}

/** @internal */
export const PricesCreatePricesUnitPrice$inboundSchema: z.ZodType<
  PricesCreatePricesUnitPrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount: z.number(),
  currency_code: z.string(),
}).transform((v) => {
  return remap$(v, {
    "currency_code": "currencyCode",
  });
});

/** @internal */
export type PricesCreatePricesUnitPrice$Outbound = {
  amount: number;
  currency_code: string;
};

/** @internal */
export const PricesCreatePricesUnitPrice$outboundSchema: z.ZodType<
  PricesCreatePricesUnitPrice$Outbound,
  z.ZodTypeDef,
  PricesCreatePricesUnitPrice
> = z.object({
  amount: z.number(),
  currencyCode: z.string(),
}).transform((v) => {
  return remap$(v, {
    currencyCode: "currency_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesUnitPrice$ {
  /** @deprecated use `PricesCreatePricesUnitPrice$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesUnitPrice$inboundSchema;
  /** @deprecated use `PricesCreatePricesUnitPrice$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesUnitPrice$outboundSchema;
  /** @deprecated use `PricesCreatePricesUnitPrice$Outbound` instead. */
  export type Outbound = PricesCreatePricesUnitPrice$Outbound;
}

export function pricesCreatePricesUnitPriceToJSON(
  pricesCreatePricesUnitPrice: PricesCreatePricesUnitPrice,
): string {
  return JSON.stringify(
    PricesCreatePricesUnitPrice$outboundSchema.parse(
      pricesCreatePricesUnitPrice,
    ),
  );
}

export function pricesCreatePricesUnitPriceFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreatePricesUnitPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreatePricesUnitPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreatePricesUnitPrice' from JSON`,
  );
}

/** @internal */
export const PricesCreatePricesStatus$inboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesStatus
> = z.nativeEnum(PricesCreatePricesStatus);

/** @internal */
export const PricesCreatePricesStatus$outboundSchema: z.ZodNativeEnum<
  typeof PricesCreatePricesStatus
> = PricesCreatePricesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesStatus$ {
  /** @deprecated use `PricesCreatePricesStatus$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesStatus$inboundSchema;
  /** @deprecated use `PricesCreatePricesStatus$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesStatus$outboundSchema;
}

/** @internal */
export const PricesCreatePricesCustomData$inboundSchema: z.ZodType<
  PricesCreatePricesCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type PricesCreatePricesCustomData$Outbound = {};

/** @internal */
export const PricesCreatePricesCustomData$outboundSchema: z.ZodType<
  PricesCreatePricesCustomData$Outbound,
  z.ZodTypeDef,
  PricesCreatePricesCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreatePricesCustomData$ {
  /** @deprecated use `PricesCreatePricesCustomData$inboundSchema` instead. */
  export const inboundSchema = PricesCreatePricesCustomData$inboundSchema;
  /** @deprecated use `PricesCreatePricesCustomData$outboundSchema` instead. */
  export const outboundSchema = PricesCreatePricesCustomData$outboundSchema;
  /** @deprecated use `PricesCreatePricesCustomData$Outbound` instead. */
  export type Outbound = PricesCreatePricesCustomData$Outbound;
}

export function pricesCreatePricesCustomDataToJSON(
  pricesCreatePricesCustomData: PricesCreatePricesCustomData,
): string {
  return JSON.stringify(
    PricesCreatePricesCustomData$outboundSchema.parse(
      pricesCreatePricesCustomData,
    ),
  );
}

export function pricesCreatePricesCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreatePricesCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreatePricesCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreatePricesCustomData' from JSON`,
  );
}

/** @internal */
export const PricesCreateResponseBody$inboundSchema: z.ZodType<
  PricesCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_id: z.string(),
  description: z.nullable(z.string()).optional(),
  type: PricesCreatePricesType$inboundSchema,
  name: z.string(),
  billing_cycle: z.lazy(() => PricesCreatePricesBillingCycle$inboundSchema),
  trial_period: z.lazy(() => PricesCreatePricesTrialPeriod$inboundSchema),
  unit_price: z.lazy(() => PricesCreatePricesUnitPrice$inboundSchema),
  status: PricesCreatePricesStatus$inboundSchema,
  custom_data: z.lazy(() => PricesCreatePricesCustomData$inboundSchema)
    .optional(),
  id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
    "billing_cycle": "billingCycle",
    "trial_period": "trialPeriod",
    "unit_price": "unitPrice",
    "custom_data": "customData",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type PricesCreateResponseBody$Outbound = {
  product_id: string;
  description?: string | null | undefined;
  type: string;
  name: string;
  billing_cycle: PricesCreatePricesBillingCycle$Outbound;
  trial_period: PricesCreatePricesTrialPeriod$Outbound;
  unit_price: PricesCreatePricesUnitPrice$Outbound;
  status: string;
  custom_data?: PricesCreatePricesCustomData$Outbound | undefined;
  id: string;
  created_at: string;
  updated_at: string;
};

/** @internal */
export const PricesCreateResponseBody$outboundSchema: z.ZodType<
  PricesCreateResponseBody$Outbound,
  z.ZodTypeDef,
  PricesCreateResponseBody
> = z.object({
  productId: z.string(),
  description: z.nullable(z.string()).optional(),
  type: PricesCreatePricesType$outboundSchema,
  name: z.string(),
  billingCycle: z.lazy(() => PricesCreatePricesBillingCycle$outboundSchema),
  trialPeriod: z.lazy(() => PricesCreatePricesTrialPeriod$outboundSchema),
  unitPrice: z.lazy(() => PricesCreatePricesUnitPrice$outboundSchema),
  status: PricesCreatePricesStatus$outboundSchema,
  customData: z.lazy(() => PricesCreatePricesCustomData$outboundSchema)
    .optional(),
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    unitPrice: "unit_price",
    customData: "custom_data",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PricesCreateResponseBody$ {
  /** @deprecated use `PricesCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = PricesCreateResponseBody$inboundSchema;
  /** @deprecated use `PricesCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = PricesCreateResponseBody$outboundSchema;
  /** @deprecated use `PricesCreateResponseBody$Outbound` instead. */
  export type Outbound = PricesCreateResponseBody$Outbound;
}

export function pricesCreateResponseBodyToJSON(
  pricesCreateResponseBody: PricesCreateResponseBody,
): string {
  return JSON.stringify(
    PricesCreateResponseBody$outboundSchema.parse(pricesCreateResponseBody),
  );
}

export function pricesCreateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<PricesCreateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PricesCreateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PricesCreateResponseBody' from JSON`,
  );
}
