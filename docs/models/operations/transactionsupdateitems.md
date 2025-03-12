# TransactionsUpdateItems

## Example Usage

```typescript
import { TransactionsUpdateItems } from "open-billing/models/operations";

let value: TransactionsUpdateItems = {
  price: [
    {
      productId: "<id>",
      type: "standard",
      name: "<value>",
      billingCycle: {
        interval: "day",
        frequency: 5929.46,
      },
      trialPeriod: {
        interval: "month",
        frequency: 2326.02,
      },
      unitPrice: {
        amount: 4892.25,
        currencyCode: "KZT",
      },
      status: "active",
      id: "<id>",
      createdAt: "1735588623326",
      updatedAt: "1741738373519",
    },
  ],
  quantity: 7583.66,
  product: {
    id: "<id>",
    name: "<value>",
    description: "when gadzooks until woot",
    updatedAt: "1741777694518",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `price`                                                                                      | [operations.TransactionsUpdatePrice](../../models/operations/transactionsupdateprice.md)[]   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `quantity`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `product`                                                                                    | [operations.TransactionsUpdateProduct](../../models/operations/transactionsupdateproduct.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |