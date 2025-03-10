# TransactionsListMethodDetails3

## Example Usage

```typescript
import { TransactionsListMethodDetails3 } from "open-billing/models/operations";

let value: TransactionsListMethodDetails3 = {
  paymentMethod: "BANK_TRANSFER",
  details: {
    bankName: "<value>",
    bankReference: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `paymentMethod`                                                                                                                                                        | [operations.TransactionsListMethodDetailsTransactionsResponsePaymentMethod](../../models/operations/transactionslistmethoddetailstransactionsresponsepaymentmethod.md) | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `details`                                                                                                                                                              | [operations.TransactionsListMethodDetailsTransactionsResponseDetails](../../models/operations/transactionslistmethoddetailstransactionsresponsedetails.md)             | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |