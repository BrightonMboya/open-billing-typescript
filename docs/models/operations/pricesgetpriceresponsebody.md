# PricesGetPriceResponseBody

## Example Usage

```typescript
import { PricesGetPriceResponseBody } from "open-billing/models/operations";

let value: PricesGetPriceResponseBody = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "day",
    frequency: 4205.39,
  },
  trialPeriod: {
    interval: "month",
    frequency: 8605.52,
  },
  unitPrice: {
    amount: 7270.44,
    currencyCode: "EUR",
  },
  status: "active",
  id: "<id>",
  createdAt: "1711807457484",
  updatedAt: "1741536830791",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `productId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `description`                                                                                  | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `type`                                                                                         | [operations.PricesGetPriceType](../../models/operations/pricesgetpricetype.md)                 | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `billingCycle`                                                                                 | [operations.PricesGetPriceBillingCycle](../../models/operations/pricesgetpricebillingcycle.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `trialPeriod`                                                                                  | [operations.PricesGetPriceTrialPeriod](../../models/operations/pricesgetpricetrialperiod.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `unitPrice`                                                                                    | [operations.PricesGetPriceUnitPrice](../../models/operations/pricesgetpriceunitprice.md)       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.PricesGetPriceStatus](../../models/operations/pricesgetpricestatus.md)             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `customData`                                                                                   | [operations.PricesGetPriceCustomData](../../models/operations/pricesgetpricecustomdata.md)     | :heavy_minus_sign:                                                                             | Any valid JSON value                                                                           |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `updatedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |