# Price

## Example Usage

```typescript
import { Price } from "open-billing/models/operations";

let value: Price = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "day",
    frequency: 3015.75,
  },
  trialPeriod: {
    interval: "month",
    frequency: 2900.77,
  },
  unitPrice: {
    amount: 6180.16,
    currencyCode: "KES",
  },
  status: "active",
  id: "<id>",
  createdAt: "1719654649894",
  updatedAt: "1741746863159",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `productId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | [operations.ProductsCreateWithPricesType](../../models/operations/productscreatewithpricestype.md)                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `billingCycle`                                                                                                         | [operations.ProductsCreateWithPricesBillingCycle](../../models/operations/productscreatewithpricesbillingcycle.md)     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `trialPeriod`                                                                                                          | [operations.ProductsCreateWithPricesTrialPeriod](../../models/operations/productscreatewithpricestrialperiod.md)       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `unitPrice`                                                                                                            | [operations.ProductsCreateWithPricesUnitPrice](../../models/operations/productscreatewithpricesunitprice.md)           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | [operations.ProductsCreateWithPricesProductsStatus](../../models/operations/productscreatewithpricesproductsstatus.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `customData`                                                                                                           | [operations.ProductsCreateWithPricesCustomData](../../models/operations/productscreatewithpricescustomdata.md)         | :heavy_minus_sign:                                                                                                     | Any valid JSON value                                                                                                   |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `createdAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `updatedAt`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |