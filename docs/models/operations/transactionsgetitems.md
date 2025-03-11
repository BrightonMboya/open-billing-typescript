# TransactionsGetItems

## Example Usage

```typescript
import { TransactionsGetItems } from "open-billing/models/operations";

let value: TransactionsGetItems = {
  price: [
    {
      productId: "<id>",
      type: "custom",
      name: "<value>",
      billingCycle: {
        interval: "year",
        frequency: 5756.34,
      },
      trialPeriod: {
        interval: "month",
        frequency: 678.55,
      },
      unitPrice: {
        amount: 9522.16,
        currencyCode: "MDL",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1711703604983",
      updatedAt: "1741603592281",
    },
  ],
  quantity: 2569.75,
  product: {
    id: "<id>",
    name: "<value>",
    description: "delight inasmuch lovingly strictly boiling",
    updatedAt: "1741595151538",
    customData: {},
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `price`                                                                                | [operations.TransactionsGetPrice](../../models/operations/transactionsgetprice.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `quantity`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `product`                                                                              | [operations.TransactionsGetProduct](../../models/operations/transactionsgetproduct.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |