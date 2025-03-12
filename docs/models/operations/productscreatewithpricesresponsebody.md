# ProductsCreateWithPricesResponseBody

Creating a product with Prices

## Example Usage

```typescript
import { ProductsCreateWithPricesResponseBody } from "open-billing/models/operations";

let value: ProductsCreateWithPricesResponseBody = {
  product: {
    id: "<id>",
    name: "<value>",
    description: "inject worth uh-huh substitution psst upon er",
    updatedAt: "1741750664810",
  },
  price: [
    {
      productId: "<id>",
      type: "custom",
      name: "<value>",
      billingCycle: {
        interval: "month",
        frequency: 7301.22,
      },
      trialPeriod: {
        interval: "week",
        frequency: 3982.21,
      },
      unitPrice: {
        amount: 2098.43,
        currencyCode: "CNY",
      },
      status: "archived",
      id: "<id>",
      createdAt: "1733570491898",
      updatedAt: "1741739993916",
    },
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `product`                                                | [operations.Product](../../models/operations/product.md) | :heavy_check_mark:                                       | N/A                                                      |
| `price`                                                  | [operations.Price](../../models/operations/price.md)[]   | :heavy_check_mark:                                       | N/A                                                      |