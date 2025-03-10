# TransactionsGetPayments

## Example Usage

```typescript
import { TransactionsGetPayments } from "open-billing/models/operations";

let value: TransactionsGetPayments = {
  id: "<id>",
  status: "PENDING",
  paymentMethod: "BANK_TRANSFER",
  provider: "PAYSTACK",
  createdAt: "1740433301770",
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.TransactionsGetTransactionsStatus](../../models/operations/transactionsgettransactionsstatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `paymentMethod`                                                                                              | [operations.TransactionsGetPaymentMethod](../../models/operations/transactionsgetpaymentmethod.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `provider`                                                                                                   | [operations.TransactionsGetProvider](../../models/operations/transactionsgetprovider.md)                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `providerReference`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `providerMetadata`                                                                                           | [operations.TransactionsGetProviderMetadata](../../models/operations/transactionsgetprovidermetadata.md)     | :heavy_check_mark:                                                                                           | Any valid JSON value                                                                                         |
| `methodDetails`                                                                                              | *operations.TransactionsGetMethodDetails*                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |