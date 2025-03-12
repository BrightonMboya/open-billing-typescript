# TransactionsGetItems

## Example Usage

```typescript
import { TransactionsGetItems } from "open-billing/models/operations";

let value: TransactionsGetItems = {
  price: [
    {
      productId: "<id>",
      type: "standard",
      name: "<value>",
      billingCycle: {
        interval: "month",
        frequency: 1127.88,
      },
      trialPeriod: {
        interval: "year",
        frequency: 8453.74,
      },
      unitPrice: {
        amount: 5345.09,
        currencyCode: "JPY",
      },
      status: "active",
      id: "<id>",
      createdAt: "1726066207749",
      updatedAt: "1741773600413",
    },
  ],
  quantity: 2750.06,
  product: {
    id: "<id>",
    name: "<value>",
    description: "bracelet gosh geez knotty so indeed sour",
    updatedAt: "1741708262222",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `price`                                                                                | [operations.TransactionsGetPrice](../../models/operations/transactionsgetprice.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `quantity`                                                                             | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `product`                                                                              | [operations.TransactionsGetProduct](../../models/operations/transactionsgetproduct.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |