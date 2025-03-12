# MethodDetails2

## Example Usage

```typescript
import { MethodDetails2 } from "open-billing/models/operations";

let value: MethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 455.1,
    expYear: 1979.82,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                    | [operations.TransactionsCreateMethodDetailsPaymentMethod](../../models/operations/transactionscreatemethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `details`                                                                                                                          | [operations.TransactionsCreateMethodDetailsDetails](../../models/operations/transactionscreatemethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |