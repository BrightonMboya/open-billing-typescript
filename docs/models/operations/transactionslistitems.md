# TransactionsListItems

## Example Usage

```typescript
import { TransactionsListItems } from "open-billing/models/operations";

let value: TransactionsListItems = {
  price: [
    {
      productId: "<id>",
      type: "standard",
      name: "<value>",
      billingCycle: {
        interval: "day",
        frequency: 2704.77,
      },
      trialPeriod: {
        interval: "month",
        frequency: 3842.73,
      },
      unitPrice: {
        amount: 7034.07,
        currencyCode: "HTG",
      },
      status: "active",
      id: "<id>",
      createdAt: "1719922160277",
      updatedAt: "1741587178415",
    },
  ],
  quantity: 9585.33,
  product: {
    id: "<id>",
    name: "<value>",
    description: "why limited gosh inwardly",
    updatedAt: "1741529719206",
    customData: {},
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `price`                                                                                  | [operations.TransactionsListPrice](../../models/operations/transactionslistprice.md)[]   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `quantity`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `product`                                                                                | [operations.TransactionsListProduct](../../models/operations/transactionslistproduct.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |