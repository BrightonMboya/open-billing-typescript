# TransactionsCreateTransactionsItems

## Example Usage

```typescript
import { TransactionsCreateTransactionsItems } from "open-billing/models/operations";

let value: TransactionsCreateTransactionsItems = {
  price: [
    {
      productId: "<id>",
      type: "custom",
      name: "<value>",
      billingCycle: {
        interval: "month",
        frequency: 7935.68,
      },
      trialPeriod: {
        interval: "week",
        frequency: 8007.99,
      },
      unitPrice: {
        amount: 5488.46,
        currencyCode: "KWD",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1710734740974",
      updatedAt: "1741519613641",
    },
  ],
  quantity: 2921.77,
  product: {
    id: "<id>",
    name: "<value>",
    description:
      "whether boo poor deliberately pleasing afore pick obediently kissingly blue",
    updatedAt: "1741517533958",
    customData: {},
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `price`                                                  | [operations.Price](../../models/operations/price.md)[]   | :heavy_check_mark:                                       | N/A                                                      |
| `quantity`                                               | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `product`                                                | [operations.Product](../../models/operations/product.md) | :heavy_check_mark:                                       | N/A                                                      |