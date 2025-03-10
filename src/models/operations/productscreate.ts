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

export type ProductsCreateRequestBody = {
  name: string;
  description: string;
  status?: Status | undefined;
  /**
   * Any valid JSON value
   */
  customData?: CustomData | undefined;
};

export const ProductsCreateStatus = {
  Active: "active",
  Archived: "archived",
} as const;
export type ProductsCreateStatus = ClosedEnum<typeof ProductsCreateStatus>;

/**
 * Any valid JSON value
 */
export type ProductsCreateCustomData = {};

/**
 * Creating Product endpoint
 */
export type ProductsCreateResponseBody = {
  id: string;
  name: string;
  description: string;
  status?: ProductsCreateStatus | undefined;
  createdAt?: string | undefined;
  updatedAt: string;
  /**
   * Any valid JSON value
   */
  customData: ProductsCreateCustomData;
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
export const ProductsCreateRequestBody$inboundSchema: z.ZodType<
  ProductsCreateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  description: z.string(),
  status: Status$inboundSchema.optional(),
  custom_data: z.lazy(() => CustomData$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
  });
});

/** @internal */
export type ProductsCreateRequestBody$Outbound = {
  name: string;
  description: string;
  status?: string | undefined;
  custom_data?: CustomData$Outbound | undefined;
};

/** @internal */
export const ProductsCreateRequestBody$outboundSchema: z.ZodType<
  ProductsCreateRequestBody$Outbound,
  z.ZodTypeDef,
  ProductsCreateRequestBody
> = z.object({
  name: z.string(),
  description: z.string(),
  status: Status$outboundSchema.optional(),
  customData: z.lazy(() => CustomData$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateRequestBody$ {
  /** @deprecated use `ProductsCreateRequestBody$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateRequestBody$inboundSchema;
  /** @deprecated use `ProductsCreateRequestBody$outboundSchema` instead. */
  export const outboundSchema = ProductsCreateRequestBody$outboundSchema;
  /** @deprecated use `ProductsCreateRequestBody$Outbound` instead. */
  export type Outbound = ProductsCreateRequestBody$Outbound;
}

export function productsCreateRequestBodyToJSON(
  productsCreateRequestBody: ProductsCreateRequestBody,
): string {
  return JSON.stringify(
    ProductsCreateRequestBody$outboundSchema.parse(productsCreateRequestBody),
  );
}

export function productsCreateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsCreateRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateRequestBody' from JSON`,
  );
}

/** @internal */
export const ProductsCreateStatus$inboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateStatus
> = z.nativeEnum(ProductsCreateStatus);

/** @internal */
export const ProductsCreateStatus$outboundSchema: z.ZodNativeEnum<
  typeof ProductsCreateStatus
> = ProductsCreateStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateStatus$ {
  /** @deprecated use `ProductsCreateStatus$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateStatus$inboundSchema;
  /** @deprecated use `ProductsCreateStatus$outboundSchema` instead. */
  export const outboundSchema = ProductsCreateStatus$outboundSchema;
}

/** @internal */
export const ProductsCreateCustomData$inboundSchema: z.ZodType<
  ProductsCreateCustomData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ProductsCreateCustomData$Outbound = {};

/** @internal */
export const ProductsCreateCustomData$outboundSchema: z.ZodType<
  ProductsCreateCustomData$Outbound,
  z.ZodTypeDef,
  ProductsCreateCustomData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateCustomData$ {
  /** @deprecated use `ProductsCreateCustomData$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateCustomData$inboundSchema;
  /** @deprecated use `ProductsCreateCustomData$outboundSchema` instead. */
  export const outboundSchema = ProductsCreateCustomData$outboundSchema;
  /** @deprecated use `ProductsCreateCustomData$Outbound` instead. */
  export type Outbound = ProductsCreateCustomData$Outbound;
}

export function productsCreateCustomDataToJSON(
  productsCreateCustomData: ProductsCreateCustomData,
): string {
  return JSON.stringify(
    ProductsCreateCustomData$outboundSchema.parse(productsCreateCustomData),
  );
}

export function productsCreateCustomDataFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateCustomData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsCreateCustomData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateCustomData' from JSON`,
  );
}

/** @internal */
export const ProductsCreateResponseBody$inboundSchema: z.ZodType<
  ProductsCreateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: ProductsCreateStatus$inboundSchema.optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string(),
  custom_data: z.lazy(() => ProductsCreateCustomData$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "custom_data": "customData",
  });
});

/** @internal */
export type ProductsCreateResponseBody$Outbound = {
  id: string;
  name: string;
  description: string;
  status?: string | undefined;
  createdAt?: string | undefined;
  updatedAt: string;
  custom_data: ProductsCreateCustomData$Outbound;
};

/** @internal */
export const ProductsCreateResponseBody$outboundSchema: z.ZodType<
  ProductsCreateResponseBody$Outbound,
  z.ZodTypeDef,
  ProductsCreateResponseBody
> = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  status: ProductsCreateStatus$outboundSchema.optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string(),
  customData: z.lazy(() => ProductsCreateCustomData$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    customData: "custom_data",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsCreateResponseBody$ {
  /** @deprecated use `ProductsCreateResponseBody$inboundSchema` instead. */
  export const inboundSchema = ProductsCreateResponseBody$inboundSchema;
  /** @deprecated use `ProductsCreateResponseBody$outboundSchema` instead. */
  export const outboundSchema = ProductsCreateResponseBody$outboundSchema;
  /** @deprecated use `ProductsCreateResponseBody$Outbound` instead. */
  export type Outbound = ProductsCreateResponseBody$Outbound;
}

export function productsCreateResponseBodyToJSON(
  productsCreateResponseBody: ProductsCreateResponseBody,
): string {
  return JSON.stringify(
    ProductsCreateResponseBody$outboundSchema.parse(productsCreateResponseBody),
  );
}

export function productsCreateResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ProductsCreateResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductsCreateResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductsCreateResponseBody' from JSON`,
  );
}
