# PricesCreateRequestBody

## Example Usage

```typescript
import { PricesCreateRequestBody } from "open-billing/models/operations";

let value: PricesCreateRequestBody = {
  productId: "<id>",
  type: "custom",
  name: "<value>",
  billingCycle: {
    interval: "year",
    frequency: 6304.48,
  },
  trialPeriod: {
    interval: "year",
    frequency: 2930.2,
  },
  unitPrice: {
    amount: 8489.44,
    currencyCode: "NIO",
  },
  status: "active",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `productId`                                                                            | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `type`                                                                                 | [operations.Type](../../models/operations/type.md)                                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `name`                                                                                 | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `billingCycle`                                                                         | [operations.BillingCycle](../../models/operations/billingcycle.md)                     | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `trialPeriod`                                                                          | [operations.TrialPeriod](../../models/operations/trialperiod.md)                       | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `unitPrice`                                                                            | [operations.UnitPrice](../../models/operations/unitprice.md)                           | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `status`                                                                               | [operations.PricesCreateStatus](../../models/operations/pricescreatestatus.md)         | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `customData`                                                                           | [operations.PricesCreateCustomData](../../models/operations/pricescreatecustomdata.md) | :heavy_minus_sign:                                                                     | Any valid JSON value                                                                   |