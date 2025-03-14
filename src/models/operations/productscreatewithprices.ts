/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const Status = {
  Active: "active",
  Archived: "archived",
} as const;
export type Status = ClosedEnum<typeof Status>;

/**
 * Any valid JSON value
 */
export type CustomData = {};

export const Type = {
  Standard: "standard",
  Custom: "custom",
} as const;
export type Type = ClosedEnum<typeof Type>;

export const Interval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type Interval = ClosedEnum<typeof Interval>;

export type BillingCycle = {
  interval: Interval;
  frequency: number;
};

export const ProductsCreateWithPricesInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type ProductsCreateWithPricesInterval = ClosedEnum<
  typeof ProductsCreateWithPricesInterval
>;

export type TrialPeriod = {
  interval: ProductsCreateWithPricesInterval;
  frequency: number;
};

export type UnitPrice = {
  amount: number;
  currencyCode: string;
};

export type ProductsCreateWithPricesRequestBody = {
  name: string;
  description?: string | null | undefined;
  status: Status;
  /**
   * Any valid JSON value
   */
  customData?: CustomData | undefined;
  type: Type;
  billingCycle: BillingCycle;
  trialPeriod: TrialPeriod;
  unitPrice: UnitPrice;
};

export const ProductsCreateWithPricesStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type ProductsCreateWithPricesStatus = ClosedEnum<
  typeof ProductsCreateWithPricesStatus
>;

export type Product = {
  id: string;
  name: string;
  description: string;
  status?: ProductsCreateWithPricesStatus | undefined;
  createdAt?: string | undefined;
  updatedAt: string;
};

export const ProductsCreateWithPricesType = {
  Standard: "standard",
  Custom: "custom",
} as const;
export type ProductsCreateWithPricesType = ClosedEnum<
  typeof ProductsCreateWithPricesType
>;

export const ProductsCreateWithPricesProductsInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type ProductsCreateWithPricesProductsInterval = ClosedEnum<
  typeof ProductsCreateWithPricesProductsInterval
>;

export type ProductsCreateWithPricesBillingCycle = {
  interval: ProductsCreateWithPricesProductsInterval;
  frequency: number;
};

export const ProductsCreateWithPricesProductsResponseInterval = {
  Day: "day",
  Week: "week",
  Month: "month",
  Year: "year",
} as const;
export type ProductsCreateWithPricesProductsResponseInterval = ClosedEnum<
  typeof ProductsCreateWithPricesProductsResponseInterval
>;

export type ProductsCreateWithPricesTrialPeriod = {
  interval: ProductsCreateWithPricesProductsResponseInterval;
  frequency: number;
};

export type ProductsCreateWithPricesUnitPrice = {
  amount: number;
  currencyCode: string;
};

export const ProductsCreateWithPricesProductsStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type ProductsCreateWithPricesProductsStatus = ClosedEnum<
  typeof ProductsCreateWithPricesProductsStatus
>;

/**
 * Any valid JSON value
 */
export type ProductsCreateWithPricesCustomData = {};

export type Price = {
  productId: string;
  description?: string | null | undefined;
  type: ProductsCreateWithPricesType;
  name: string;
  billingCycle: ProductsCreateWithPricesBillingCycle;
  trialPeriod: ProductsCreateWithPricesTrialPeriod;
  unitPrice: ProductsCreateWithPricesUnitPrice;
  status: ProductsCreateWithPricesProductsStatus;
  /**
   * Any valid JSON value
   */
  customData?: ProductsCreateWithPricesCustomData | undefined;
  id: string;
  createdAt: string;
  updatedAt: string;
};

/**
 * Creating a product with Prices
 */
export type ProductsCreateWithPricesResponseBody = {
  product: Product;
  price: Array<Price>;
};

/** @internal */
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const CustomData$inboundSchema: z.ZodType<
  CustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CustomData$Outbound = {};

/** @internal */
export const CustomData$outboundSchema: z.ZodType<
  CustomData$Outbound,
  z.ZodTypeDef,
  CustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomData$ {
  /** @deprecated use `CustomData$inboundSchema` instead. */
  export const inboundSchema = CustomData$inboundSchema;
  /** @deprecated use `CustomData$outboundSchema` instead. */
  export const outboundSchema = CustomData$outboundSchema;
  /** @deprecated use `CustomData$Outbound` instead. */
  export type Outbound = CustomData$Outbound;
}

export function customDataToJSON(customData: CustomData): string {
  return JSON.stringify(CustomData$outboundSchema.parse(customData));
}

export function customDataFromJSON(
  jsonString: string,
): SafeParseResult<CustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomData' from JSON`,
  );
}

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const Interval$inboundSchema: z.ZodNativeEnum<typeof Interval> = z
  .nativeEnum(Interval);

/** @internal */
export const Interval$outboundSchema: z.ZodNativeEnum<typeof Interval> =
  Interval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Interval$ {
  /** @deprecated use `Interval$inboundSchema` instead. */
  export const inboundSchema = Interval$inboundSchema;
  /** @deprecated use `Interval$outboundSchema` instead. */
  export const outboundSchema = Interval$outboundSchema;
}

/** @internal */
export const BillingCycle$inboundSchema: z.ZodType<
  BillingCycle,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: Interval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type BillingCycle$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const BillingCycle$outboundSchema: z.ZodType<
  BillingCycle$Outbound,
  z.ZodTypeDef,
  BillingCycle
> = z.object({
  interval: Interval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BillingCycle$ {
  /** @deprecated use `BillingCycle$inboundSchema` instead. */
  export const inboundSchema = BillingCycle$inboundSchema;
  /** @deprecated use `BillingCycle$outboundSchema` instead. */
  export const outboundSchema = BillingCycle$outboundSchema;
  /** @deprecated use `BillingCycle$Outbound` instead. */
  export type Outbound = BillingCycle$Outbound;
}

export function billingCycleToJSON(billingCycle: BillingCycle): string {
  return JSON.stringify(BillingCycle$outboundSchema.parse(billingCycle));
}

export function billingCycleFromJSON(
  jsonString: string,
): SafeParseResult<BillingCycle, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BillingCycle$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BillingCycle' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesInterval$inboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateWithPricesInterval
> = z.nativeEnum(ProductsCreateWithPricesInterval);

/** @internal */
export const ProductsCreateWithPricesInterval$outboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateWithPricesInterval
> = ProductsCreateWithPricesInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesInterval$ {
  /** @deprecated use `ProductsCreateWithPricesInterval$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateWithPricesInterval$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesInterval$outboundSchema` instead. */
  export const outboundSchema = ProductsCreateWithPricesInterval$outboundSchema;
}

/** @internal */
export const TrialPeriod$inboundSchema: z.ZodType<
  TrialPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: ProductsCreateWithPricesInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type TrialPeriod$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const TrialPeriod$outboundSchema: z.ZodType<
  TrialPeriod$Outbound,
  z.ZodTypeDef,
  TrialPeriod
> = z.object({
  interval: ProductsCreateWithPricesInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrialPeriod$ {
  /** @deprecated use `TrialPeriod$inboundSchema` instead. */
  export const inboundSchema = TrialPeriod$inboundSchema;
  /** @deprecated use `TrialPeriod$outboundSchema` instead. */
  export const outboundSchema = TrialPeriod$outboundSchema;
  /** @deprecated use `TrialPeriod$Outbound` instead. */
  export type Outbound = TrialPeriod$Outbound;
}

export function trialPeriodToJSON(trialPeriod: TrialPeriod): string {
  return JSON.stringify(TrialPeriod$outboundSchema.parse(trialPeriod));
}

export function trialPeriodFromJSON(
  jsonString: string,
): SafeParseResult<TrialPeriod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrialPeriod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrialPeriod' from JSON`,
  );
}

/** @internal */
export const UnitPrice$inboundSchema: z.ZodType<
  UnitPrice,
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
export type UnitPrice$Outbound = {
  amount: number;
  currency_code: string;
};

/** @internal */
export const UnitPrice$outboundSchema: z.ZodType<
  UnitPrice$Outbound,
  z.ZodTypeDef,
  UnitPrice
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
export namespace UnitPrice$ {
  /** @deprecated use `UnitPrice$inboundSchema` instead. */
  export const inboundSchema = UnitPrice$inboundSchema;
  /** @deprecated use `UnitPrice$outboundSchema` instead. */
  export const outboundSchema = UnitPrice$outboundSchema;
  /** @deprecated use `UnitPrice$Outbound` instead. */
  export type Outbound = UnitPrice$Outbound;
}

export function unitPriceToJSON(unitPrice: UnitPrice): string {
  return JSON.stringify(UnitPrice$outboundSchema.parse(unitPrice));
}

export function unitPriceFromJSON(
  jsonString: string,
): SafeParseResult<UnitPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnitPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnitPrice' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesRequestBody$inboundSchema: z.ZodType<
  ProductsCreateWithPricesRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  status: Status$inboundSchema,
  custom_data: z.lazy(() => CustomData$inboundSchema).optional(),
  type: Type$inboundSchema,
  billing_cycle: z.lazy(() => BillingCycle$inboundSchema),
  trial_period: z.lazy(() => TrialPeriod$inboundSchema),
  unit_price: z.lazy(() => UnitPrice$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
    "billing_cycle": "billingCycle",
    "trial_period": "trialPeriod",
    "unit_price": "unitPrice",
  });
});

/** @internal */
export type ProductsCreateWithPricesRequestBody$Outbound = {
  name: string;
  description?: string | null | undefined;
  status: string;
  custom_data?: CustomData$Outbound | undefined;
  type: string;
  billing_cycle: BillingCycle$Outbound;
  trial_period: TrialPeriod$Outbound;
  unit_price: UnitPrice$Outbound;
};

/** @internal */
export const ProductsCreateWithPricesRequestBody$outboundSchema: z.ZodType<
  ProductsCreateWithPricesRequestBody$Outbound,
  z.ZodTypeDef,
  ProductsCreateWithPricesRequestBody
> = z.object({
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  status: Status$outboundSchema,
  customData: z.lazy(() => CustomData$outboundSchema).optional(),
  type: Type$outboundSchema,
  billingCycle: z.lazy(() => BillingCycle$outboundSchema),
  trialPeriod: z.lazy(() => TrialPeriod$outboundSchema),
  unitPrice: z.lazy(() => UnitPrice$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
    billingCycle: "billing_cycle",
    trialPeriod: "trial_period",
    unitPrice: "unit_price",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesRequestBody$ {
  /** @deprecated use `ProductsCreateWithPricesRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    ProductsCreateWithPricesRequestBody$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesRequestBody$outboundSchema;
  /** @deprecated use `ProductsCreateWithPricesRequestBody$Outbound` instead. */
  export type Outbound = ProductsCreateWithPricesRequestBody$Outbound;
}

export function productsCreateWithPricesRequestBodyToJSON(
  productsCreateWithPricesRequestBody: ProductsCreateWithPricesRequestBody,
): string {
  return JSON.stringify(
    ProductsCreateWithPricesRequestBody$outboundSchema.parse(
      productsCreateWithPricesRequestBody,
    ),
  );
}

export function productsCreateWithPricesRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateWithPricesRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ProductsCreateWithPricesRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateWithPricesRequestBody' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesStatus$inboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateWithPricesStatus
> = z.nativeEnum(ProductsCreateWithPricesStatus);

/** @internal */
export const ProductsCreateWithPricesStatus$outboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateWithPricesStatus
> = ProductsCreateWithPricesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesStatus$ {
  /** @deprecated use `ProductsCreateWithPricesStatus$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateWithPricesStatus$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesStatus$outboundSchema` instead. */
  export const outboundSchema = ProductsCreateWithPricesStatus$outboundSchema;
}

/** @internal */
export const Product$inboundSchema: z.ZodType<Product, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    status: ProductsCreateWithPricesStatus$inboundSchema.optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string(),
  });

/** @internal */
export type Product$Outbound = {
  id: string;
  name: string;
  description: string;
  status?: string | undefined;
  createdAt?: string | undefined;
  updatedAt: string;
};

/** @internal */
export const Product$outboundSchema: z.ZodType<
  Product$Outbound,
  z.ZodTypeDef,
  Product
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: ProductsCreateWithPricesStatus$outboundSchema.optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Product$ {
  /** @deprecated use `Product$inboundSchema` instead. */
  export const inboundSchema = Product$inboundSchema;
  /** @deprecated use `Product$outboundSchema` instead. */
  export const outboundSchema = Product$outboundSchema;
  /** @deprecated use `Product$Outbound` instead. */
  export type Outbound = Product$Outbound;
}

export function productToJSON(product: Product): string {
  return JSON.stringify(Product$outboundSchema.parse(product));
}

export function productFromJSON(
  jsonString: string,
): SafeParseResult<Product, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Product$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Product' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesType$inboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateWithPricesType
> = z.nativeEnum(ProductsCreateWithPricesType);

/** @internal */
export const ProductsCreateWithPricesType$outboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateWithPricesType
> = ProductsCreateWithPricesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesType$ {
  /** @deprecated use `ProductsCreateWithPricesType$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateWithPricesType$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesType$outboundSchema` instead. */
  export const outboundSchema = ProductsCreateWithPricesType$outboundSchema;
}

/** @internal */
export const ProductsCreateWithPricesProductsInterval$inboundSchema:
  z.ZodNativeEnum<typeof ProductsCreateWithPricesProductsInterval> = z
    .nativeEnum(ProductsCreateWithPricesProductsInterval);

/** @internal */
export const ProductsCreateWithPricesProductsInterval$outboundSchema:
  z.ZodNativeEnum<typeof ProductsCreateWithPricesProductsInterval> =
    ProductsCreateWithPricesProductsInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesProductsInterval$ {
  /** @deprecated use `ProductsCreateWithPricesProductsInterval$inboundSchema` instead. */
  export const inboundSchema =
    ProductsCreateWithPricesProductsInterval$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesProductsInterval$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesProductsInterval$outboundSchema;
}

/** @internal */
export const ProductsCreateWithPricesBillingCycle$inboundSchema: z.ZodType<
  ProductsCreateWithPricesBillingCycle,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: ProductsCreateWithPricesProductsInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type ProductsCreateWithPricesBillingCycle$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const ProductsCreateWithPricesBillingCycle$outboundSchema: z.ZodType<
  ProductsCreateWithPricesBillingCycle$Outbound,
  z.ZodTypeDef,
  ProductsCreateWithPricesBillingCycle
> = z.object({
  interval: ProductsCreateWithPricesProductsInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesBillingCycle$ {
  /** @deprecated use `ProductsCreateWithPricesBillingCycle$inboundSchema` instead. */
  export const inboundSchema =
    ProductsCreateWithPricesBillingCycle$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesBillingCycle$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesBillingCycle$outboundSchema;
  /** @deprecated use `ProductsCreateWithPricesBillingCycle$Outbound` instead. */
  export type Outbound = ProductsCreateWithPricesBillingCycle$Outbound;
}

export function productsCreateWithPricesBillingCycleToJSON(
  productsCreateWithPricesBillingCycle: ProductsCreateWithPricesBillingCycle,
): string {
  return JSON.stringify(
    ProductsCreateWithPricesBillingCycle$outboundSchema.parse(
      productsCreateWithPricesBillingCycle,
    ),
  );
}

export function productsCreateWithPricesBillingCycleFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateWithPricesBillingCycle, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ProductsCreateWithPricesBillingCycle$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateWithPricesBillingCycle' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesProductsResponseInterval$inboundSchema:
  z.ZodNativeEnum<typeof ProductsCreateWithPricesProductsResponseInterval> = z
    .nativeEnum(ProductsCreateWithPricesProductsResponseInterval);

/** @internal */
export const ProductsCreateWithPricesProductsResponseInterval$outboundSchema:
  z.ZodNativeEnum<typeof ProductsCreateWithPricesProductsResponseInterval> =
    ProductsCreateWithPricesProductsResponseInterval$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesProductsResponseInterval$ {
  /** @deprecated use `ProductsCreateWithPricesProductsResponseInterval$inboundSchema` instead. */
  export const inboundSchema =
    ProductsCreateWithPricesProductsResponseInterval$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesProductsResponseInterval$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesProductsResponseInterval$outboundSchema;
}

/** @internal */
export const ProductsCreateWithPricesTrialPeriod$inboundSchema: z.ZodType<
  ProductsCreateWithPricesTrialPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  interval: ProductsCreateWithPricesProductsResponseInterval$inboundSchema,
  frequency: z.number(),
});

/** @internal */
export type ProductsCreateWithPricesTrialPeriod$Outbound = {
  interval: string;
  frequency: number;
};

/** @internal */
export const ProductsCreateWithPricesTrialPeriod$outboundSchema: z.ZodType<
  ProductsCreateWithPricesTrialPeriod$Outbound,
  z.ZodTypeDef,
  ProductsCreateWithPricesTrialPeriod
> = z.object({
  interval: ProductsCreateWithPricesProductsResponseInterval$outboundSchema,
  frequency: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesTrialPeriod$ {
  /** @deprecated use `ProductsCreateWithPricesTrialPeriod$inboundSchema` instead. */
  export const inboundSchema =
    ProductsCreateWithPricesTrialPeriod$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesTrialPeriod$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesTrialPeriod$outboundSchema;
  /** @deprecated use `ProductsCreateWithPricesTrialPeriod$Outbound` instead. */
  export type Outbound = ProductsCreateWithPricesTrialPeriod$Outbound;
}

export function productsCreateWithPricesTrialPeriodToJSON(
  productsCreateWithPricesTrialPeriod: ProductsCreateWithPricesTrialPeriod,
): string {
  return JSON.stringify(
    ProductsCreateWithPricesTrialPeriod$outboundSchema.parse(
      productsCreateWithPricesTrialPeriod,
    ),
  );
}

export function productsCreateWithPricesTrialPeriodFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateWithPricesTrialPeriod, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ProductsCreateWithPricesTrialPeriod$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateWithPricesTrialPeriod' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesUnitPrice$inboundSchema: z.ZodType<
  ProductsCreateWithPricesUnitPrice,
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
export type ProductsCreateWithPricesUnitPrice$Outbound = {
  amount: number;
  currency_code: string;
};

/** @internal */
export const ProductsCreateWithPricesUnitPrice$outboundSchema: z.ZodType<
  ProductsCreateWithPricesUnitPrice$Outbound,
  z.ZodTypeDef,
  ProductsCreateWithPricesUnitPrice
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
export namespace ProductsCreateWithPricesUnitPrice$ {
  /** @deprecated use `ProductsCreateWithPricesUnitPrice$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateWithPricesUnitPrice$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesUnitPrice$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesUnitPrice$outboundSchema;
  /** @deprecated use `ProductsCreateWithPricesUnitPrice$Outbound` instead. */
  export type Outbound = ProductsCreateWithPricesUnitPrice$Outbound;
}

export function productsCreateWithPricesUnitPriceToJSON(
  productsCreateWithPricesUnitPrice: ProductsCreateWithPricesUnitPrice,
): string {
  return JSON.stringify(
    ProductsCreateWithPricesUnitPrice$outboundSchema.parse(
      productsCreateWithPricesUnitPrice,
    ),
  );
}

export function productsCreateWithPricesUnitPriceFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateWithPricesUnitPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsCreateWithPricesUnitPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateWithPricesUnitPrice' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesProductsStatus$inboundSchema:
  z.ZodNativeEnum<typeof ProductsCreateWithPricesProductsStatus> = z.nativeEnum(
    ProductsCreateWithPricesProductsStatus,
  );

/** @internal */
export const ProductsCreateWithPricesProductsStatus$outboundSchema:
  z.ZodNativeEnum<typeof ProductsCreateWithPricesProductsStatus> =
    ProductsCreateWithPricesProductsStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesProductsStatus$ {
  /** @deprecated use `ProductsCreateWithPricesProductsStatus$inboundSchema` instead. */
  export const inboundSchema =
    ProductsCreateWithPricesProductsStatus$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesProductsStatus$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesProductsStatus$outboundSchema;
}

/** @internal */
export const ProductsCreateWithPricesCustomData$inboundSchema: z.ZodType<
  ProductsCreateWithPricesCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ProductsCreateWithPricesCustomData$Outbound = {};

/** @internal */
export const ProductsCreateWithPricesCustomData$outboundSchema: z.ZodType<
  ProductsCreateWithPricesCustomData$Outbound,
  z.ZodTypeDef,
  ProductsCreateWithPricesCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesCustomData$ {
  /** @deprecated use `ProductsCreateWithPricesCustomData$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateWithPricesCustomData$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesCustomData$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesCustomData$outboundSchema;
  /** @deprecated use `ProductsCreateWithPricesCustomData$Outbound` instead. */
  export type Outbound = ProductsCreateWithPricesCustomData$Outbound;
}

export function productsCreateWithPricesCustomDataToJSON(
  productsCreateWithPricesCustomData: ProductsCreateWithPricesCustomData,
): string {
  return JSON.stringify(
    ProductsCreateWithPricesCustomData$outboundSchema.parse(
      productsCreateWithPricesCustomData,
    ),
  );
}

export function productsCreateWithPricesCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateWithPricesCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ProductsCreateWithPricesCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateWithPricesCustomData' from JSON`,
  );
}

/** @internal */
export const Price$inboundSchema: z.ZodType<Price, z.ZodTypeDef, unknown> = z
  .object({
    product_id: z.string(),
    description: z.nullable(z.string()).optional(),
    type: ProductsCreateWithPricesType$inboundSchema,
    name: z.string(),
    billing_cycle: z.lazy(() =>
      ProductsCreateWithPricesBillingCycle$inboundSchema
    ),
    trial_period: z.lazy(() =>
      ProductsCreateWithPricesTrialPeriod$inboundSchema
    ),
    unit_price: z.lazy(() => ProductsCreateWithPricesUnitPrice$inboundSchema),
    status: ProductsCreateWithPricesProductsStatus$inboundSchema,
    custom_data: z.lazy(() => ProductsCreateWithPricesCustomData$inboundSchema)
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
export type Price$Outbound = {
  product_id: string;
  description?: string | null | undefined;
  type: string;
  name: string;
  billing_cycle: ProductsCreateWithPricesBillingCycle$Outbound;
  trial_period: ProductsCreateWithPricesTrialPeriod$Outbound;
  unit_price: ProductsCreateWithPricesUnitPrice$Outbound;
  status: string;
  custom_data?: ProductsCreateWithPricesCustomData$Outbound | undefined;
  id: string;
  created_at: string;
  updated_at: string;
};

/** @internal */
export const Price$outboundSchema: z.ZodType<
  Price$Outbound,
  z.ZodTypeDef,
  Price
> = z.object({
  productId: z.string(),
  description: z.nullable(z.string()).optional(),
  type: ProductsCreateWithPricesType$outboundSchema,
  name: z.string(),
  billingCycle: z.lazy(() =>
    ProductsCreateWithPricesBillingCycle$outboundSchema
  ),
  trialPeriod: z.lazy(() => ProductsCreateWithPricesTrialPeriod$outboundSchema),
  unitPrice: z.lazy(() => ProductsCreateWithPricesUnitPrice$outboundSchema),
  status: ProductsCreateWithPricesProductsStatus$outboundSchema,
  customData: z.lazy(() => ProductsCreateWithPricesCustomData$outboundSchema)
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
export namespace Price$ {
  /** @deprecated use `Price$inboundSchema` instead. */
  export const inboundSchema = Price$inboundSchema;
  /** @deprecated use `Price$outboundSchema` instead. */
  export const outboundSchema = Price$outboundSchema;
  /** @deprecated use `Price$Outbound` instead. */
  export type Outbound = Price$Outbound;
}

export function priceToJSON(price: Price): string {
  return JSON.stringify(Price$outboundSchema.parse(price));
}

export function priceFromJSON(
  jsonString: string,
): SafeParseResult<Price, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Price$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Price' from JSON`,
  );
}

/** @internal */
export const ProductsCreateWithPricesResponseBody$inboundSchema: z.ZodType<
  ProductsCreateWithPricesResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  product: z.lazy(() => Product$inboundSchema),
  price: z.array(z.lazy(() => Price$inboundSchema)),
});

/** @internal */
export type ProductsCreateWithPricesResponseBody$Outbound = {
  product: Product$Outbound;
  price: Array<Price$Outbound>;
};

/** @internal */
export const ProductsCreateWithPricesResponseBody$outboundSchema: z.ZodType<
  ProductsCreateWithPricesResponseBody$Outbound,
  z.ZodTypeDef,
  ProductsCreateWithPricesResponseBody
> = z.object({
  product: z.lazy(() => Product$outboundSchema),
  price: z.array(z.lazy(() => Price$outboundSchema)),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateWithPricesResponseBody$ {
  /** @deprecated use `ProductsCreateWithPricesResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    ProductsCreateWithPricesResponseBody$inboundSchema;
  /** @deprecated use `ProductsCreateWithPricesResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    ProductsCreateWithPricesResponseBody$outboundSchema;
  /** @deprecated use `ProductsCreateWithPricesResponseBody$Outbound` instead. */
  export type Outbound = ProductsCreateWithPricesResponseBody$Outbound;
}

export function productsCreateWithPricesResponseBodyToJSON(
  productsCreateWithPricesResponseBody: ProductsCreateWithPricesResponseBody,
): string {
  return JSON.stringify(
    ProductsCreateWithPricesResponseBody$outboundSchema.parse(
      productsCreateWithPricesResponseBody,
    ),
  );
}

export function productsCreateWithPricesResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateWithPricesResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ProductsCreateWithPricesResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateWithPricesResponseBody' from JSON`,
  );
}
