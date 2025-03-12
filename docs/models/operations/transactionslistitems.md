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
        interval: "week",
        frequency: 9301.27,
      },
      trialPeriod: {
        interval: "day",
        frequency: 4013.88,
      },
      unitPrice: {
        amount: 6155.97,
        currencyCode: "XCD",
      },
      status: "active",
      id: "<id>",
      createdAt: "1739194175604",
      updatedAt: "1741704622495",
    },
  ],
  quantity: 4807.41,
  product: {
    id: "<id>",
    name: "<value>",
    description: "true amongst ick notwithstanding aboard same",
    updatedAt: "1741777358402",
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `price`                                                                                  | [operations.TransactionsListPrice](../../models/operations/transactionslistprice.md)[]   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `quantity`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `product`                                                                                | [operations.TransactionsListProduct](../../models/operations/transactionslistproduct.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |