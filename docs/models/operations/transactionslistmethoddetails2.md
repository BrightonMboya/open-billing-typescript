# TransactionsListMethodDetails2

## Example Usage

```typescript
import { TransactionsListMethodDetails2 } from "open-billing/models/operations";

let value: TransactionsListMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 8109.82,
    expYear: 6277.56,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                                        | [operations.TransactionsListMethodDetailsTransactionsPaymentMethod](../../models/operations/transactionslistmethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `details`                                                                                                                                              | [operations.TransactionsListMethodDetailsTransactionsDetails](../../models/operations/transactionslistmethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |