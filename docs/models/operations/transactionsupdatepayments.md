# TransactionsUpdatePayments

## Example Usage

```typescript
import { TransactionsUpdatePayments } from "open-billing/models/operations";

let value: TransactionsUpdatePayments = {
  id: "<id>",
  status: "FAILED",
  paymentMethod: "CARD",
  provider: "MTN",
  createdAt: "1726344012946",
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
| `status`                                                                                                                           | [operations.TransactionsUpdateTransactionsResponseStatus](../../models/operations/transactionsupdatetransactionsresponsestatus.md) | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `paymentMethod`                                                                                                                    | [operations.TransactionsUpdatePaymentMethod](../../models/operations/transactionsupdatepaymentmethod.md)                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `provider`                                                                                                                         | [operations.TransactionsUpdateProvider](../../models/operations/transactionsupdateprovider.md)                                     | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `createdAt`                                                                                                                        | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `updatedAt`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |
| `providerReference`                                                                                                                | *string*                                                                                                                           | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |
| `providerMetadata`                                                                                                                 | [operations.TransactionsUpdateProviderMetadata](../../models/operations/transactionsupdateprovidermetadata.md)                     | :heavy_check_mark:                                                                                                                 | Any valid JSON value                                                                                                               |
| `methodDetails`                                                                                                                    | *operations.TransactionsUpdateMethodDetails*                                                                                       | :heavy_check_mark:                                                                                                                 | N/A                                                                                                                                |