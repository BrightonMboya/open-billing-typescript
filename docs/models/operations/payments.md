# Payments

## Example Usage

```typescript
import { Payments } from "open-billing/models/operations";

let value: Payments = {
  id: "<id>",
  status: "FAILED",
  paymentMethod: "CARD",
  provider: "ORANGE",
  createdAt: "1735157343316",
  providerReference: "<value>",
  providerMetadata: {},
  methodDetails: {
    paymentMethod: "MOBILE_MONEY",
    details: {
      network: "<value>",
      phoneSuffix: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `status`                                                                                                                           | [operations.TransactionsCreateTransactionsResponseStatus](../../models/operations/transactionscreatetransactionsresponsestatus.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `paymentMethod`                                                                                                                    | [operations.TransactionsCreatePaymentMethod](../../models/operations/transactionscreatepaymentmethod.md)                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `provider`                                                                                                                         | [operations.TransactionsCreateProvider](../../models/operations/transactionscreateprovider.md)                                     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `providerReference`                                                                                                                | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `providerMetadata`                                                                                                                 | [operations.ProviderMetadata](../../models/operations/providermetadata.md)                                                         | :heavy_check_mark:                                                                                                                 | Any valid JSON value                                                                                                               |
| `methodDetails`                                                                                                                    | *operations.MethodDetails*                                                                                                         | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |