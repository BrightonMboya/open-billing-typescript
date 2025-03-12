/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Address not found
 */
export type AddressesGetResponseBodyData = {
  message: string;
  error: string;
};

/**
 * Address not found
 */
export class AddressesGetResponseBody extends Error {
  error: string;

  /** The original data that was passed to this error instance. */
  data$: AddressesGetResponseBodyData;

  constructor(err: AddressesGetResponseBodyData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;

    this.name = "AddressesGetResponseBody";
  }
}

/** @internal */
export const AddressesGetResponseBody$inboundSchema: z.ZodType<
  AddressesGetResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  error: z.string(),
})
  .transform((v) => {
    return new AddressesGetResponseBody(v);
  });

/** @internal */
export type AddressesGetResponseBody$Outbound = {
  message: string;
  error: string;
};

/** @internal */
export const AddressesGetResponseBody$outboundSchema: z.ZodType<
  AddressesGetResponseBody$Outbound,
  z.ZodTypeDef,
  AddressesGetResponseBody
> = z.instanceof(AddressesGetResponseBody)
  .transform(v => v.data$)
  .pipe(z.object({
    message: z.string(),
    error: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressesGetResponseBody$ {
  /** @deprecated use `AddressesGetResponseBody$inboundSchema` instead. */
  export const inboundSchema = AddressesGetResponseBody$inboundSchema;
  /** @deprecated use `AddressesGetResponseBody$outboundSchema` instead. */
  export const outboundSchema = AddressesGetResponseBody$outboundSchema;
  /** @deprecated use `AddressesGetResponseBody$Outbound` instead. */
  export type Outbound = AddressesGetResponseBody$Outbound;
}
