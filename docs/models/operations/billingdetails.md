# BillingDetails

## Example Usage

```typescript
import { BillingDetails } from "open-billing/models/operations";

let value: BillingDetails = {
  paymentTerms: {
    paymentInterval: "year",
    paymentFrequency: 333.04,
  },
  enableCheckout: false,
  additionalInformation: "<value>",
  purchaseOrderNumber: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `paymentTerms`                                                     | [operations.PaymentTerms](../../models/operations/paymentterms.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `enableCheckout`                                                   | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `additionalInformation`                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `purchaseOrderNumber`                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |