# TransactionsCreateTransactionsItems

## Example Usage

```typescript
import { TransactionsCreateTransactionsItems } from "open-billing/models/operations";

let value: TransactionsCreateTransactionsItems = {
  price: [
    {
      productId: "<id>",
      type: "standard",
      name: "<value>",
      billingCycle: {
        interval: "year",
        frequency: 8847.65,
      },
      trialPeriod: {
        interval: "month",
        frequency: 4896.85,
      },
      unitPrice: {
        amount: 1316.87,
        currencyCode: "IRR",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1719232168915",
      updatedAt: "1741706603890",
    },
  ],
  quantity: 9078.99,
  product: {
    id: "<id>",
    name: "<value>",
    description:
      "firm table restfully intent arrogantly inquisitively corporation meh",
    updatedAt: "1741777937556",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `price`                                                                                      | [operations.TransactionsCreatePrice](../../models/operations/transactionscreateprice.md)[]   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `quantity`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `product`                                                                                    | [operations.TransactionsCreateProduct](../../models/operations/transactionscreateproduct.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |