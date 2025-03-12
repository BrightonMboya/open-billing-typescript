# PricesCreateRequestBody

## Example Usage

```typescript
import { PricesCreateRequestBody } from "open-billing/models/operations";

let value: PricesCreateRequestBody = {
  productId: "<id>",
  type: "standard",
  name: "<value>",
  billingCycle: {
    interval: "week",
    frequency: 2322.34,
  },
  trialPeriod: {
    interval: "day",
    frequency: 534.27,
  },
  unitPrice: {
    amount: 7255.95,
    currencyCode: "AFN",
  },
  status: "archived",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `productId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `type`                                                                                     | [operations.PricesCreateType](../../models/operations/pricescreatetype.md)                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `billingCycle`                                                                             | [operations.PricesCreateBillingCycle](../../models/operations/pricescreatebillingcycle.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `trialPeriod`                                                                              | [operations.PricesCreateTrialPeriod](../../models/operations/pricescreatetrialperiod.md)   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `unitPrice`                                                                                | [operations.PricesCreateUnitPrice](../../models/operations/pricescreateunitprice.md)       | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [operations.PricesCreateStatus](../../models/operations/pricescreatestatus.md)             | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `customData`                                                                               | [operations.PricesCreateCustomData](../../models/operations/pricescreatecustomdata.md)     | :heavy_minus_sign:                                                                         | Any valid JSON value                                                                       |