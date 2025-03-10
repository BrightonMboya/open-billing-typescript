# TransactionsListMethodDetails1

## Example Usage

```typescript
import { TransactionsListMethodDetails1 } from "open-billing/models/operations";

let value: TransactionsListMethodDetails1 = {
  paymentMethod: "MOBILE_MONEY",
  details: {
    network: "<value>",
    phoneSuffix: "<value>",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `paymentMethod`                                                                                                                | [operations.TransactionsListMethodDetailsPaymentMethod](../../models/operations/transactionslistmethoddetailspaymentmethod.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `details`                                                                                                                      | [operations.TransactionsListMethodDetailsDetails](../../models/operations/transactionslistmethoddetailsdetails.md)             | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |