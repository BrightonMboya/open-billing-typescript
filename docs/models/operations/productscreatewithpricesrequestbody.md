# ProductsCreateWithPricesRequestBody

## Example Usage

```typescript
import { ProductsCreateWithPricesRequestBody } from "open-billing/models/operations";

let value: ProductsCreateWithPricesRequestBody = {
  name: "<value>",
  status: "active",
  type: "custom",
  billingCycle: {
    interval: "week",
    frequency: 9767.62,
  },
  trialPeriod: {
    interval: "month",
    frequency: 7392.64,
  },
  unitPrice: {
    amount: 391.87,
    currencyCode: "FKP",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `status`                                                           | [operations.Status](../../models/operations/status.md)             | :heavy_check_mark:                                                 | N/A                                                                |
| `customData`                                                       | [operations.CustomData](../../models/operations/customdata.md)     | :heavy_minus_sign:                                                 | Any valid JSON value                                               |
| `type`                                                             | [operations.Type](../../models/operations/type.md)                 | :heavy_check_mark:                                                 | N/A                                                                |
| `billingCycle`                                                     | [operations.BillingCycle](../../models/operations/billingcycle.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `trialPeriod`                                                      | [operations.TrialPeriod](../../models/operations/trialperiod.md)   | :heavy_check_mark:                                                 | N/A                                                                |
| `unitPrice`                                                        | [operations.UnitPrice](../../models/operations/unitprice.md)       | :heavy_check_mark:                                                 | N/A                                                                |