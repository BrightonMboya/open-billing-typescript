# TransactionsUpdatePayments

## Example Usage

```typescript
import { TransactionsUpdatePayments } from "open-billing/models/operations";

let value: TransactionsUpdatePayments = {
  id: "<id>",
  status: "COMPLETED",
  paymentMethod: "BANK_TRANSFER",
  provider: "ORANGE",
  createdAt: "1739851010134",
  providerReference: "<value>",
  providerMetadata: {},
  methodDetails: {
    paymentMethod: "CARD",
    details: {
      last4: "<value>",
      brand: "<value>",
      expMonth: 8021.48,
      expYear: 3229.07,
      cardholderName: "<value>",
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