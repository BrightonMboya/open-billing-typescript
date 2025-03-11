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
        interval: "year",
        frequency: 1203.87,
      },
      trialPeriod: {
        interval: "month",
        frequency: 5183.38,
      },
      unitPrice: {
        amount: 1780.66,
        currencyCode: "ZAR",
      },
      status: "active",
      id: "<id>",
      createdAt: "1729525618168",
      updatedAt: "1741643135918",
    },
  ],
  quantity: 5066.89,
  product: {
    id: "<id>",
    name: "<value>",
    description: "solidly athwart home",
    updatedAt: "1741606484777",
    customData: {},
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `price`                                                                                      | [operations.TransactionsUpdatePrice](../../models/operations/transactionsupdateprice.md)[]   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `quantity`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `product`                                                                                    | [operations.TransactionsUpdateProduct](../../models/operations/transactionsupdateproduct.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |