/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Customer not found
 */
export type CustomersGetResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Customer not found
 */
export class CustomersGetResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: CustomersGetResponseBodyData;

  constructor(err: CustomersGetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "CustomersGetResponseBody";
  }
}

/** @internal */
export const CustomersGetResponseBody$inboundSchema: z.ZodType<
  CustomersGetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  error: z.string(),
})
  .transform((v) => {
    return new CustomersGetResponseBody(v);
  });

/** @internal */
export type CustomersGetResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const CustomersGetResponseBody$outboundSchema: z.ZodType<
  CustomersGetResponseBody$Outbound,
  z.ZodTypeDef,
  CustomersGetResponseBody
> = z.instanceof(CustomersGetResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    error: z.string(),
  }));

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
