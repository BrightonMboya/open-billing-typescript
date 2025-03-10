# TransactionsUpdateMethodDetails2

## Example Usage

```typescript
import { TransactionsUpdateMethodDetails2 } from "open-billing/models/operations";

let value: TransactionsUpdateMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 5076.35,
    expYear: 1639.1,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                            | [operations.TransactionsUpdateMethodDetailsTransactionsPaymentMethod](../../models/operations/transactionsupdatemethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `details`                                                                                                                                                  | [operations.TransactionsUpdateMethodDetailsTransactionsDetails](../../models/operations/transactionsupdatemethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |