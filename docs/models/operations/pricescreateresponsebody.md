# PricesCreateResponseBody

## Example Usage

```typescript
import { PricesCreateResponseBody } from "open-billing/models/operations";

let value: PricesCreateResponseBody = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "day",
    frequency: 978.44,
  },
  trialPeriod: {
    interval: "year",
    frequency: 9729.2,
  },
  unitPrice: {
    amount: 9608.35,
    currencyCode: "UZS",
  },
  status: "archived",
  id: "<id>",
  createdAt: "1720623689568",
  updatedAt: "1741574231466",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `productId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `description`                                                                                      | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `type`                                                                                             | [operations.PricesCreateType](../../models/operations/pricescreatetype.md)                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `name`                                                                                             | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `billingCycle`                                                                                     | [operations.PricesCreateBillingCycle](../../models/operations/pricescreatebillingcycle.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `trialPeriod`                                                                                      | [operations.PricesCreateTrialPeriod](../../models/operations/pricescreatetrialperiod.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `unitPrice`                                                                                        | [operations.PricesCreateUnitPrice](../../models/operations/pricescreateunitprice.md)               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.PricesCreatePricesStatus](../../models/operations/pricescreatepricesstatus.md)         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customData`                                                                                       | [operations.PricesCreatePricesCustomData](../../models/operations/pricescreatepricescustomdata.md) | :heavy_minus_sign:                                                                                 | Any valid JSON value                                                                               |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |