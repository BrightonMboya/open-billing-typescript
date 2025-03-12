# TransactionsGetMethodDetails2

## Example Usage

```typescript
import { TransactionsGetMethodDetails2 } from "open-billing/models/operations";

let value: TransactionsGetMethodDetails2 = {
  paymentMethod: "CARD",
  details: {
    last4: "<value>",
    brand: "<value>",
    expMonth: 3816.39,
    expYear: 9473.09,
    cardholderName: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                      | [operations.TransactionsGetMethodDetailsTransactionsPaymentMethod](../../models/operations/transactionsgetmethoddetailstransactionspaymentmethod.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `details`                                                                                                                                            | [operations.TransactionsGetMethodDetailsTransactionsDetails](../../models/operations/transactionsgetmethoddetailstransactionsdetails.md)             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |